import { Component } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Asset, AssetFile, Entry } from 'contentful';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  cvLink!: SafeResourceUrl

  constructor(private contentful: ContentfulService, private sanitiser: DomSanitizer){}

  ngOnInit(){
    this.contentful.getResume()
    .subscribe({
      next:(data)=> {
        const cvEntry = data.items[0]?.fields['cv'] as Asset;  
        const fileUrl = 'https:' + cvEntry.fields.file?.url as string;   
        console.log(fileUrl)
        this.cvLink = this.sanitiser.bypassSecurityTrustResourceUrl(fileUrl);
      }
    })
  
  }

}
