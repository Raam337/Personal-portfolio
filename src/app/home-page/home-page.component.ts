import { Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  skills: any[] | undefined;

  skillSections = [
    {skillField: "Front end & Design", filter:"front"},
    {skillField: "Backend & Database", filter:"back"},
    {skillField: "Dev tools", filter:"tools"},
    {skillField: "Additional Skills", filter:"extra"}
  ]

  constructor(private contentful:ContentfulService){}

  ngOnInit(){
    this.contentful.getSkills()
    .subscribe({
      next:(data) => {
        // data.items.forEach( item => this.skills?.push(item.fields));
        console.log(data)
        let temp: any[] | undefined =[]
        data.items.forEach( item => temp?.push(item.fields))
        this.skills = temp
        console.log("Home component, skills:" , this.skills);
      }
    })

  }

}
