import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(){
    console.log(this, " initialising")
    this.contentfulService.getSkills()
    .then(skills => console.log(skills))

    this.contentfulService.getProjects()
    .then(skills => console.log(skills))
  }

}
