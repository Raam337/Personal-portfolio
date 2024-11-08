import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[animateInView]'
})
export class AnimateInViewDirective implements AfterViewInit {
  @Input() animationClass = 'in-view'; // Default animation class to add

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Set up the IntersectionObserver to observe when the element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.renderer.removeClass(this.el.nativeElement, 'animated');
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            observer.unobserve(this.el.nativeElement);  
          }, 200);
          
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }

}
