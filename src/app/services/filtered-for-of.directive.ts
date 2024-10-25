import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[filteredFor]'
})
export class FilteredForOfDirective {
  @Input() filteredForOf!: any[] | undefined;        // Input array (like ngFor)
  @Input() filteredForFilterField!: string;  // Property to filter by (type)
  @Input() filteredForFilterType!: string;  // Value to filter on
  @Input() filteredForSortBy!: string;    // Property to sort by (index)

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filteredForOf']) {
      this.updateView(); // Update the view with the new data
    }
  }

  private updateView(){

    this.viewContainer.clear();

    let filteredSortedData = this.filteredForOf;
  
    // Apply filter if a property and value are provided
    if (this.filteredForFilterField && this.filteredForFilterType) {
      filteredSortedData = filteredSortedData?.filter((item) => item[this.filteredForFilterField] === this.filteredForFilterType);
    }
    console.log(filteredSortedData)
    // Apply sorting if a property is provided
    if (this.filteredForSortBy) {
      filteredSortedData = filteredSortedData?.sort((a, b) => a[this.filteredForSortBy] - b[this.filteredForSortBy]);
    }

    // Render each filtered/sorted item
      filteredSortedData?.forEach((item) => {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item });
      });
    } 

  }
  





// import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// @Directive({
//   selector: '[filteredFor]'
// })
// export class FilteredForOfDirective {
//   @Input()
//   set filteredForOf(collection: any[] | undefined) {
//     this.viewContainer.clear();
//     collection?.forEach(item => {
//       this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item });
//     });
//   }

//   constructor(
//     private templateRef: TemplateRef<any>,
//     private viewContainer: ViewContainerRef
//   ) {}
// }
