import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityHealthPageComponent } from './community-health-page/community-health-page.component';

const routes: Routes = [
  { path: '',     component: CommunityHealthPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
