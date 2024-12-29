import { AfterViewInit, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import TagCloud from 'TagCloud';

@Component({
  selector: 'tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css']
})
export class TagCloudComponent implements AfterViewInit {
  @ViewChild('tagCloudContainer') tagCloudContainer!: ElementRef;

  @HostBinding("class") elementClass: string | undefined;

  @Input() set class(val: string) {
    this.elementClass = val;
  }

  ngAfterViewInit(): void {

    const tags = [
      'Angular', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'MongoDB', 
      'React', 'Tailwind', 'Bootstrap', 'Three.js', 'Firebase'
    ];

    const options = {
      radius:250
    };

    TagCloud(this.tagCloudContainer.nativeElement, tags, options);
  }
}