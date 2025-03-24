import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { SubSink } from 'subsink';
import {
  STORY_EDITOR_HEIGHT,
  STORY_EDITOR_WIDTH,
} from '../../utils/frame-size';
import { StoryViewerState } from '@app/state/convs-mgr/story-editor';
import { StoryViewerFrame } from '../../model/story-viewer-frame.model';
import { StoryViewerInitialiserService } from '../../providers/story-viewer-initialiser.service';

@Component({
  selector: 'convl-story-viewer-frame',
  templateUrl: './viewer-frame.component.html',
  styleUrls: ['./viewer-frame.component.scss'],
}) //implements OnDestroy
export class StoryViewerFrameComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorVC: ElementRef<HTMLElement>;
  @ViewChild('viewport') viewport: ElementRef<HTMLElement>;
  @ViewChild('draw', { read: ViewContainerRef, static: true })
  drawArea: ViewContainerRef;
  @Output() frameLoaded = new EventEmitter<StoryViewerFrame>();
  @Output() zoomed = new EventEmitter<number>();
  // Set frame width and height at minimum on load.
  _zoom = 1;
  frameWidth = STORY_EDITOR_WIDTH;
  frameHeight = STORY_EDITOR_HEIGHT;
  loading = true;
  private _sbS = new SubSink();
  private _viewportBounds$$ = new BehaviorSubject<DOMRect>(
    null as any as DOMRect
  );
  /** Observable bounding box of the viewport */
  public viewportBounds$: Observable<DOMRect> = this._viewportBounds$$.pipe(
    filter((f) => !!f)
  );
  private _frame: StoryViewerFrame;
  private _frameState$$ = new BehaviorSubject<StoryViewerState>(
    null as any as StoryViewerState
  );
  public frameState$: Observable<StoryViewerState> = this._frameState$$.pipe(
    filter((f) => !!f)
  );

  constructor(private _frameInitialiser: StoryViewerInitialiserService) {}

  ngAfterViewInit() {
    this._frame = this._frameInitialiser.initialiseEditor(
      this.editorVC,
      this.drawArea
    );

    // Transfer listener for frame state changes.
    //    This transfer is necessary as the listener is initialised async and
    //      can thus be null in the child components in case they render too fast.
    // Debounce 1 second for performance issues (scrapped - not necessary?)
    this._sbS.sink = this._frame.frameChanges$
      // .pipe(debounceTime(1000))
      .subscribe((f) => {
        if (f) {
          this._frameState$$.next(f);
        }

        this.viewPortScrolled();

        // Release loading state after 1 second cooldown to avoid loading delays
        //(scrapped - not necessary?)
        if (this.loading) {
          setTimeout(() => (this.loading = false), 250);
        }
      });

    this.frameLoaded.emit(this._frame);
    this._applyZoom();
  }

  viewPortScrolled(): void {
    const editorPosition = this.editorVC.nativeElement.getBoundingClientRect();
    const viewportDimensions =
      this.viewport.nativeElement.getBoundingClientRect();

    const viewportBounds = {
      x: viewportDimensions.x - editorPosition.x,
      y: viewportDimensions.y - editorPosition.y,
      width: viewportDimensions.width,
      height: viewportDimensions.height,
    } as DOMRect;

    this._viewportBounds$$.next(viewportBounds);
  }

  //
  // SECTION - ZOOM

  onPinch(level: number) {
    return level < 0 ? this.increaseFrameZoom() : this.decreaseFrameZoom();
  }

  /** Increase the frame zoom size */
  increaseFrameZoom() {
    if (this._zoom < 1) {
      this._zoom = this._zoom += 0.03;
      this._applyZoom();
    }

    return this._zoom;
  }

  /** Decrease the frame zoom size */
  decreaseFrameZoom() {
    if (this._zoom >= 0.25) {
      this._zoom = this._zoom -= 0.03;
      this._applyZoom();
    }
    return this._zoom;
  }

  /** Apply a zoom to the story editor */
  setFrameZoom(value: number) {
    if (value >= 0.25 && value <= 1) {
      this._zoom = value;
      this._applyZoom();
    }

    return this._zoom;
  }

  ngOnDestroy(): void {
    this._sbS.unsubscribe();
  }

  // SECTION - CLEANUP
  //

  private _applyZoom(repaint = false) {
    // this.viewport.nativeElement.style.transform = `scale(${this._zoom})`;
    this.editorVC.nativeElement.style.transform = `scale(${this._zoom})`;
    this._frame.setZoom(this._zoom);

    // Apply bounding box transformations
    this.frameWidth = STORY_EDITOR_WIDTH * this._zoom;
    this.frameHeight = STORY_EDITOR_HEIGHT * this._zoom;

    this.zoomed.emit(this._zoom);
  }
}
