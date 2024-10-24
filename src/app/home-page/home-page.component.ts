import { Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  skills : Entry<any>[] = [];

  constructor(private contentful:ContentfulService){}

  async ngOnInit():Promise<void> {
    this.skills = await this.contentful.getSkills()
    console.log(this.skills[0])
    
  }

}
