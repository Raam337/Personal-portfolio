import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentfulService } from './services/contentful.service';
import { ProjectsComponent } from './projects/projects.component';
import { ThemeToggleComponent } from './navbar/theme-toggle/theme-toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ThemeToggleComponent
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
