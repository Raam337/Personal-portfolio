import { Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';
import { AnimatedBackgroundComponent } from "./animated-background/animated-background.component";
import { AppComponent } from '../app.component';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent implements OnInit {

  skills: any[] | undefined;

  skillSections = [
    {skillField: "Front end & Design", filter:"front"},
    {skillField: "Backend & Database", filter:"back"},
    {skillField: "Dev tools", filter:"tools"},
    {skillField: "Additional Skills", filter:"extra"}
  ]

  constructor(private contentful:ContentfulService, private appComponent:AppComponent){}

  ngOnInit(){

    if (this.appComponent.animated === false) { 
      this.appComponent.animated = true
    } else {
      document.documentElement.style.setProperty('--global-duration', "0");
      document.documentElement.style.setProperty('--global-delay', "0");
      document.documentElement.style.setProperty('--global-opacity', "1");
    }

    console.log("home render")
    window.scrollTo(0, 0);
    this.contentful.getSkills()
    .subscribe({
      next:(data) => {
        let temp: any[] | undefined =[]
        data.items.forEach( item => temp?.push(item.fields))
        this.skills = temp
      }
    })
  }

  scrollSection(){
    const section = document.getElementById("AboutMe");
    if(section){
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
