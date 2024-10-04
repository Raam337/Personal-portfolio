import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'bnwtu0is0u9l',
  accessToken:'lAJ55WqBZUPc3T8iSpspYEzKn6b1qQwJdHqJcZpIswE',
  contentTypeIds: {
    project: 'projectList',
    skill: 'skills'
  },
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {}

  getSkills(query?: object): Promise<Entry<any>[]> {
    const requestParameter = Object.assign({content_type: CONFIG.contentTypeIds.skill}, query);

    return this.cdaClient.getEntries(requestParameter)
    .then(res => res.items);
  }

  getProjects(query?: object): Promise<Entry<any>[]> {
    const requestParameter = Object.assign({content_type: CONFIG.contentTypeIds.project}, query);
    
    return this.cdaClient.getEntries(requestParameter)
    .then(res => res.items);
  }

}