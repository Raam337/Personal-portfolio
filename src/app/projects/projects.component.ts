import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  sizes = [ [2,2], [1,2], [2,3], [1,2], [2,2], [2,2] ]

  projects = []

  selectedProject = true

  skills=["Javascript","React","Firebase","Tailwind","Abstract"]

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(){
    // console.log(this, " initialising")
    // this.contentfulService.getSkills() 


    // this.contentfulService.getProjects()
    // .then(skills => console.log(skills))
  }

}
