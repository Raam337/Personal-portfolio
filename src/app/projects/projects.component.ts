import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(){
    // console.log(this, " initialising")
    // this.contentfulService.getSkills()


    // this.contentfulService.getProjects()
    // .then(skills => console.log(skills))
  }

}
