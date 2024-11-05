import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from, Observable } from 'rxjs';

const CONFIG = {
  space: 'bnwtu0is0u9l',
  accessToken:'lAJ55WqBZUPc3T8iSpspYEzKn6b1qQwJdHqJcZpIswE',
  contentTypeIds: {
    project: 'projectList',
    skill: 'skills',
    resume: 'resume'
  },
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {}

  getSkills(query?: object){
    const requestParameter = Object.assign({content_type: CONFIG.contentTypeIds.skill}, query);

    return from(this.cdaClient.getEntries(requestParameter))

  }

  getProjects(query?: object){
    const requestParameter = Object.assign({content_type: CONFIG.contentTypeIds.project}, query);
    
    return from(this.cdaClient.getEntries(requestParameter))
  }

  getResume(query?: object){
    const requestParameter = Object.assign({content_type: CONFIG.contentTypeIds.resume}, query);
    
    return from(this.cdaClient.getEntries(requestParameter))
  }

}