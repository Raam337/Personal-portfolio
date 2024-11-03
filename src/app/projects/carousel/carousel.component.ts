import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @ViewChild('splide', { static: true }) splideElement!: ElementRef;
  
  @Input() imageList!: any[]

  sourceList = ["https://placehold.co/600x400","https://placehold.co/500x400","https://placehold.co/650x400","https://placehold.co/640x400"]


}