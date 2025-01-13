import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path:"Home", component: HomePageComponent, title: "Home page | RF-Dev"},
  { path:"Projects", component: ProjectsComponent, title: "Projects | RF-Dev"},
  { path:"Resume", component: ResumeComponent, title: "Resume | RF-Dev"},
  { path:"**", redirectTo:"/Home", pathMatch:"full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
