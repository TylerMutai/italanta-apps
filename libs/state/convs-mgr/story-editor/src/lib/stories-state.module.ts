import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoryEditorStateService } from './providers/story-editor-state.service';
import { StoryViewerStateService } from './providers/story-viewer-state.service';

@NgModule({
  imports: [RouterModule],
  providers: [StoryEditorStateService, StoryViewerStateService],
})
export class StoryEditorStateModule {}
