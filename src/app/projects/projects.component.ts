import { Component, OnInit, signal } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { ThemeService } from '../services/theme-service.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  sizes = [ [2,2], [1,2], [2,3], [1,2], [2,2], [2,2] ] // x/y , width/height

  projects: any[] | undefined = []

  selectedProject:number | null = null
  darkTheme:boolean = true 
  skills=["Javascript","React","Firebase","Tailwind","Abstract"]

  constructor(private contentful: ContentfulService, private themeService:ThemeService) { }

  ngOnInit(){
    this.themeService.signal$.subscribe(signal=>{
      this.darkTheme = signal
    })

    this.contentful.getProjects()
    .subscribe({
      next:(data) => {
        let temp: any[] | undefined =[]
        data.items.forEach( item => temp?.push(item.fields))
        temp.sort( (a,b) => a.order - b.order)
        this.projects = temp
      }
    })
  }

  handleCardClick(i:number){
    this.selectedProject = i
    window.scrollTo(0,0)
  }

  handleModalClose(){
    this.selectedProject = null
  }

}
