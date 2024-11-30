import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path:"Home", component: HomePageComponent, title: "Home - ABC"},
  { path:"Projects", component: ProjectsComponent, title: "Home - ABC"},
  { path:"Resume", component: ResumeComponent, title: "Home - ABC"},
  { path:"**", redirectTo:"/Home", pathMatch:"full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
