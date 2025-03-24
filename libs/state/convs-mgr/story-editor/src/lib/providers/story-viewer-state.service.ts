import { Injectable } from '@angular/core';

import { SubSink } from 'subsink';
import { cloneDeep as ___cloneDeep } from 'lodash';

import { combineLatest, Observable, of } from 'rxjs';
import { debounceTime, filter, map, switchMap, take } from 'rxjs/operators';

import { Logger } from '@iote/bricks-angular';

import {
  StoryBlock,
  StoryBlockConnection,
} from '@app/model/convs-mgr/stories/blocks/main';

import { ActiveStoryStore } from '@app/state/convs-mgr/stories';
import { StoryBlocksStore } from '@app/state/convs-mgr/stories/blocks';
import { StoryConnectionsStore } from '@app/state/convs-mgr/stories/block-connections';

import { StoryViewerState } from '../model/story-viewer-state.model';

/**
 * Service responsible for persisting the state of stories from the editor.
 *
 *  This includes saving their blocks and story updates
 */
@Injectable()
export class StoryViewerStateService {
  /** The first load of each time the story editor service was called.
   *  We need this param to diff. between discarded and newly loaded blocks. */
  private _lastLoadedState: StoryViewerState | null;

  private _isSaving = false;

  private _sBs = new SubSink();

  constructor(
    private _story$$: ActiveStoryStore,
    private _blocks$$: StoryBlocksStore,
    private _connections$$: StoryConnectionsStore,
    // private _blockConnectionsService: BlockConnectionsService,
    private _logger: Logger
  ) {}

  /**
   * Service which returns the data state of the editor.
   *  To use in onInit
   *
   * @warn    : For the persistance to work, the story editor page should only take one of these on load.
   * @returns : The initial state of the story editor @see {StoryViewerState}
   */
  get(): Observable<StoryViewerState> {
    const state$ = this._story$$.get().pipe(
      debounceTime(500),
      // Load story viewer state. This includes the story itself, the blocks which it consists and the connections.
      switchMap((story) =>
        story
          ? combineLatest([
              of(story),
              this._blocks$$.get(),
              this._connections$$.get(),
            ])
          : of([])
      )
    );

    // The information is combined into a single state that contains all the latest objects.
    const stateData$ = state$.pipe(
      // Fix {CLM-73} - Multiple refresh bug on story saving.
      filter(() => !this._isSaving),
      map(([story, blocks, connections]) => {
        const blocksMap = new Map<string, StoryBlock>();
        for (const bl of blocks) {
          if (bl.id) {
            blocksMap.set(bl.id, bl);
          }
        }

        // recursively call until you have all ordered blocks.
        const bfs = () => {
          const traversedConnections = new Set<string>();
          const traversedBlocks = new Set<string>();
          const firstConnection = connections.filter(
            (c) => c.sourceId === story.id
          );
          const blocks: StoryBlock[][] = [];
          if (firstConnection) {
            const connectionsQueue = [firstConnection[0]];

            while (connectionsQueue.length) {
              const len = connectionsQueue.length;
              const _blocks: StoryBlock[] = [];

              for (let i = 0; i < len; i++) {
                const connection = connectionsQueue.shift();
                if (connection?.targetId) {
                  const block = blocksMap.get(connection.targetId);
                  if (block) {
                    _blocks.push(block);
                  }

                  const nextConnections = connections.filter((c) =>
                    c.sourceId?.includes(connection.targetId)
                  );

                  for (const conn of nextConnections) {
                    const blockId = conn.targetId.includes('-')
                      ? conn.targetId.substring(
                          conn.targetId.lastIndexOf('-') + 1
                        )
                      : conn.targetId;

                    if (
                      !traversedConnections.has(conn?.id) &&
                      !traversedBlocks.has(blockId)
                    ) {
                      connectionsQueue.push(conn);
                    }

                    traversedConnections.add(connection.id);
                    traversedBlocks.add(blockId);
                  }
                }
                blocks.push(_blocks);
              }
            }
          }
          return blocks;
        };
        const _blocks = bfs();
        const flattenedBlocks: StoryBlock[] = [];
        let x = 40;
        const width = 350,
          height = 400;
        for (let i = 0; i < _blocks.length; i++) {
          let y = 40;
          for (let j = 0; j < _blocks[i].length; j++) {
            const bl = {
              ..._blocks[i][j],
              position: {
                x,
                y,
              },
            };

            flattenedBlocks.push(bl);
            y += height;
          }
          x += width;
        }

        console.log('BFS BLOCKS: ', flattenedBlocks);
        console.log('\n');
        return {
          story,
          blocks: flattenedBlocks,
          connections,
        } as StoryViewerState;
      })
    );

    // Store the first load to later diff. between previous and new state (to allow deletion of blocks etc.)
    stateData$
      .pipe(take(1))
      .subscribe((state) => this._setLastLoadedState(state));

    // Return state.
    return stateData$;
  }

  /**
   * Reset the state to null
   *  - to use in onDestroy */
  flush() {
    this._setLastLoadedState(null);
    this._sBs.unsubscribe();
  }

  /** Creates a block. */
  private _createBlock(block: StoryBlock) {
    return this._blocks$$.write(block, block.id as string);
  }

  /** We cannot just delete blocks as active chat users might have their cursor on that block.
   *  We still need to service them with the older flow. */
  private _deleteBlock(oldBlock: StoryBlock) {
    oldBlock.deleted = true;
    return this._updateBlock(oldBlock);
  }

  private _updateBlock(block: StoryBlock) {
    return this._blocks$$.update(block);
  }

  private _createConnection(connection: StoryBlockConnection) {
    return this._connections$$.add(connection);
  }

  // @todo @reagan - investigate impact of deleting connections on the bot
  private _deleteConnection(connection: StoryBlockConnection) {
    // connection.deleted = true;
    // return this._connections$$.update(connection);
    return this._connections$$.remove(connection);
  }

  private _setLastLoadedState(state: StoryViewerState | null) {
    console.log(`:: Setting last loaded state ::`);
    console.debug(state);
    this._lastLoadedState = ___cloneDeep(state);
  }
}
