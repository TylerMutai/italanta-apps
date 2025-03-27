import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { FormControl, FormGroup } from '@angular/forms';

import { SubSink } from 'subsink';
import { BehaviorSubject, filter, Observable, take } from 'rxjs';

import { Breadcrumb, Logger } from '@iote/bricks-angular';

import {
  StoryViewerState,
  StoryViewerStateService,
} from '@app/state/convs-mgr/story-editor';

import { SidemenuToggleService } from '@app/elements/layout/page-convl';
import {
  HOME_CRUMB,
  STORY_EDITOR_CRUMB,
} from '@app/elements/nav/convl/breadcrumbs';

import { ToastMessageTypeEnum, ToastStatus } from '@app/model/layout/toast';
import { StoryError } from '@app/model/convs-mgr/stories/main';

import { SideScreenToggleService } from '@app/features/convs-mgr/stories/editor';
import { BlockPortalService } from '../../providers/block-portal.service';
import { getActiveBlock } from '../../providers/fetch-active-block-component.function';
import { SaveStoryService } from '../../providers/save-story.service';
import { StoryViewerFrameComponent } from '../../components/viewer-frame/viewer-frame.component';
import { StoryViewerFrame } from '../../model/story-viewer-frame.model';

@Component({
  selector: 'convl-story-viewer-page',
  templateUrl: './story-viewer.page.html',
  styleUrls: ['./story-viewer.page.scss'],
})
export class StoryViewerPageComponent implements OnInit, OnDestroy {
  portal$: Observable<TemplatePortal>;
  activeComponent: ComponentPortal<any>;
  activeBlockForm: FormGroup;
  activeBlockTitle: string;
  errors: StoryError[] = [];
  shownErrors: StoryError[] = [];
  toastType: ToastStatus = { type: ToastMessageTypeEnum.Error };
  @ViewChild('StoryViewerFrame') StoryViewerFrame: StoryViewerFrameComponent;
  opened: boolean;
  pageName: string;
  isSideScreenOpen: boolean;
  state: StoryViewerState;
  breadcrumbs: Breadcrumb[] = [];
  loading = new BehaviorSubject<boolean>(true);
  frame: StoryViewerFrame;
  stateSaved = true;
  hasEmptyFields = false;
  //TODO @CHESA LInk boolean to existence of story in DB
  storyHasBeenSaved = false;
  zoomLevel: FormControl = new FormControl({ value: 100, disabled: true });
  private _sb = new SubSink();

  constructor(
    private _editorStateService: StoryViewerStateService,
    private _blockPortalService: BlockPortalService,
    private _saveStory: SaveStoryService,
    private _sideMenu: SidemenuToggleService,
    private sideScreen: SideScreenToggleService,
    private _dialog: MatDialog,
    private _cd: ChangeDetectorRef,
    private renderer: Renderer2,
    _router: Router,
    private _logger: Logger
  ) {
    // Make sure screen is always closed on loading editor
    this._sideMenu.toggleExpand(false);

    // Load the editor
    this._editorStateService
      .get()
      .pipe(take(1))
      .subscribe((state) => {
        this._logger.log(
          () => `Loaded editor for story ${state.story.id}. Logging state.`
        );
        this._logger.log(() => state);

        this.state = state;
        this.pageName = `Story overview :: ${state.story.name}`;

        const story = state.story;
        this.breadcrumbs = [
          HOME_CRUMB(_router),
          STORY_EDITOR_CRUMB(_router, story.id, story.name as string, true),
        ];
        this.loading.next(false);
      });
  }

  ngOnInit() {
    this._sb.sink = this.sideScreen.sideScreen$.subscribe(
      (isOpen) => (this.isSideScreenOpen = isOpen)
    );

    this._sb.sink = this._blockPortalService.portal$.subscribe(
      (blockDetails) => {
        if (blockDetails.form) {
          const comp = getActiveBlock(blockDetails.form.value.type);
          this.activeBlockForm = blockDetails.form;
          this.activeBlockTitle = blockDetails.title;
          this.activeComponent = new ComponentPortal(comp);
          this.opened = true;
        }
      }
    );
  }

  onFrameViewLoaded(frame: StoryViewerFrame) {
    this.frame = frame;

    // After both frame AND data are loaded (hence the subscribe), draw frame blocks on the frame.
    this._sb.sink = this.loading
      .pipe(filter((loading) => !loading))
      .subscribe(/*() => {
        this.frame.init(this.state).then(() => {
          const node = document.getElementById('editor-frame');
          if (node) {
            toBlob(node)
              .then((blob) => {
                if (blob) {
                  FileSaver.saveAs(blob, 'innovations-flow.png');
                }
              })
              .catch(function (error) {
                console.error('oops, something went wrong!', error);
              });
          }
        });
      }*/);

    this._cd.detectChanges();
  }

  closeErrorToast(error: StoryError) {
    this.errors = this.errors.filter((item: StoryError) => {
      return item.blockId !== error.blockId;
    });
    this.shownErrors = this.errors.slice(0, 2);
  }

  scrollTo(error: StoryError) {
    switch (error.blockId) {
      case 'story-end-anchor':
      case this.state.story.id:
        this.scrollToBlock(error.blockId);
        break;

      default:
        {
          const block = this.state.blocks.find(
            (obj) => obj.id === error.blockId
          );
          if (block) {
            this.scrollToBlock(block.id as string);
          }
        }
        break;
    }
  }

  scrollToBlock(blockId: string) {
    const editorFrame = document.getElementById('viewport');
    const targetSection = document.getElementById(`${blockId}`);

    if (editorFrame && targetSection) {
      // Limit the scrolling to only the viewport by binding it
      const rect = targetSection.getBoundingClientRect();
      const editorRect = editorFrame.getBoundingClientRect();

      // Calculate the scroll positions
      const scrollTop =
        editorFrame.scrollTop +
        rect.top -
        editorRect.top -
        (editorRect.height - rect.height) / 2;
      const scrollLeft =
        editorFrame.scrollLeft +
        rect.left -
        editorRect.left -
        (editorRect.width - rect.width) / 2;

      // Scroll to the target block
      editorFrame.scrollTo({
        top: Math.max(0, scrollTop), // Ensure the scrollTop value is not negative
        left: Math.max(0, scrollLeft), // Ensure the scrollLeft value is not negative
        behavior: 'smooth',
      });

      // Set the border style
      this.renderer.setStyle(targetSection, 'border', '2px solid red');

      // Remove the border style after 5 seconds
      setTimeout(() => {
        this.renderer.removeStyle(targetSection, 'border');
      }, 5000);
    }
  }

  // Section - Zoom

  increaseZoom() {
    if (this.zoomLevel.value >= 150) {
      return;
    }

    const zoom = this.StoryViewerFrame.increaseFrameZoom();
    return this.setZoom(zoom * 100, true);
  }

  decreaseZoom() {
    if (this.zoomLevel.value <= 25) {
      return;
    }

    const zoom = this.StoryViewerFrame.decreaseFrameZoom();
    return this.setZoom(zoom * 100, true);
  }

  /**
   *
   * @param val - Zoom value to set
   * @param avoidUpdate - In case the call comes from internal ops such as increaseZoom or decreaseZoom,
   *                          avoid updating the underlying structure as it already happened.
   */
  setZoom(val: number, avoidUpdate = false) {
    if (val >= 25 && val <= 100) {
      this.zoomLevel.setValue(val);
      if (!avoidUpdate) {
        this.StoryViewerFrame.setFrameZoom(val / 100);
      }
    }
  }

  ngOnDestroy() {
    this._editorStateService.flush();
    this._sb.unsubscribe();
  }
}
