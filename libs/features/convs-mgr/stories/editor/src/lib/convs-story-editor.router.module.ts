import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { IsLoggedInGuard } from '@app/elements/base/authorisation';

import { StoryEditorPageComponent } from './pages/story-editor/story-editor.page';
import { StoryViewerPageComponent } from './pages/story-viewer/story-viewer.page';

const STORY_EDITOR_ROUTES: Route[] = [
  // Main story detail - stories/:id
  {
    path: '',
    component: StoryEditorPageComponent,
    canActivate: [IsLoggedInGuard],
  },

  // Main story order rendering - stories/:id/ordered
  {
    path: 'ordered',
    component: StoryViewerPageComponent,
    canActivate: [IsLoggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(STORY_EDITOR_ROUTES)],
  exports: [RouterModule],
})
export class ConvlStoryEditorRouterModule {}
