import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  sizes = [ [2,2], [1,2], [2,3], [1,2], [2,2], [2,2] ] // x/y , width/height

  projects: any[] | undefined = []

  selectedProject:number | null = null

  skills=["Javascript","React","Firebase","Tailwind","Abstract"]

  constructor(private contentful: ContentfulService) { }

  ngOnInit(){
    this.contentful.getProjects()
    .subscribe({
      next:(data) => {
        let temp: any[] | undefined =[]
        data.items.forEach( item => temp?.push(item.fields))
        temp.sort( (a,b) => a.order - b.order)
        this.projects = temp
        console.log("Proejcts component, skills:" , this.projects);
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
