import { Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  skills : any[] = [];

  constructor(private contentful:ContentfulService){}

  async ngOnInit():Promise<void> {
    const data = await this.contentful.getSkills()
    data.forEach(entry =>{ this.skills.push(entry.fields) })
    console.log(this.skills)
  }

}
