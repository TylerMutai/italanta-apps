import { ElementRef, Injectable, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {
  ContainmentType,
  newInstance as initJsPlumb,
} from '@jsplumb/browser-ui';

import { BlockInjectorService } from '@app/features/convs-mgr/stories/blocks/library/main';
import { DeleteConnOverlaySpec } from '../utils/overlays/delete-connection-overlay.util';
import { StoryViewerFrame } from '../model/story-viewer-frame.model';

@Injectable()
export class StoryViewerInitialiserService {
  constructor(
    private _fb: FormBuilder,
    private _blocksInjector: BlockInjectorService
  ) {}

  initialiseEditor(
    editorContainer: ElementRef<HTMLElement>,
    viewport: ViewContainerRef
  ) {
    // Get inner HTML element from reference
    const container = editorContainer.nativeElement;

    // Initialise div as a _jsPlumb instance
    const _jsplumb = initJsPlumb({
      container,
      dragOptions: {
        containment: ContainmentType.parent,
      },

      // Specify connection overlays here so that
      //  they can be initialized with the editor and
      //   will be default for all the created connections
      connectionOverlays: [DeleteConnOverlaySpec],

      // paintStyle: { strokeWidth: 1 },
      // anchors: [["Left", "Right", "Bottom"], ["Top", "Bottom"]],
    });

    _jsplumb.addClass(container, 'jsplumb_instance');

    return new StoryViewerFrame(
      this._fb,
      _jsplumb,
      this._blocksInjector,
      viewport,
      editorContainer
    );
  }
}
