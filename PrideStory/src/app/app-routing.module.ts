import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InactiveStoryComponent } from './components/inactive-story/inactive-story.component';
import { CreateEditStoryComponent } from './components/story-list/create-edit-story/create-edit-story.component';

import { StoryListComponent } from './components/story-list/story-list.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "active-projects"},
  {path: "active-projects", component: StoryListComponent},
  {path: "create-story", component: CreateEditStoryComponent},
  {path: "edit-story", component: CreateEditStoryComponent},
  {path: "inactive-story", component: InactiveStoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
