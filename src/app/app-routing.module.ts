import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path:"Home", component: ProjectsComponent, title: "Home - ABC"},
  { path:"Projects", component: ProjectsComponent, title: "Home - ABC"},
  { path:"Resume", component: ResumeComponent, title: "Home - ABC"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
