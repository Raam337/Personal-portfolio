import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentfulService } from './services/contentful.service';
import { ProjectsComponent } from './projects/projects.component';
import { ThemeToggleComponent } from './navbar/theme-toggle/theme-toggle.component';
import { FormsModule } from '@angular/forms';
import { ResumeComponent } from './resume/resume.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnimatedBackgroundComponent } from './home-page/animated-background/animated-background.component';
import { TagCloudComponent } from './home-page/tag-cloud/tag-cloud.component';
import { FilteredForOfDirective } from './services/filtered-for-of.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ThemeToggleComponent,
    ResumeComponent,
    LandingPageComponent,
    HomePageComponent,
    AnimatedBackgroundComponent,
    TagCloudComponent,
    FilteredForOfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
