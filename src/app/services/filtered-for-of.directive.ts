import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[filteredFor]'
})
export class FilteredForOfDirective {
  @Input() filteredForOf: any[] = ["pop"];        // Input array (like ngFor)
  @Input() filteredForFilterField!: string;  // Property to filter by (type)
  @Input() filteredForFilterType!: string;  // Value to filter on
  @Input() filteredForSortBy!: string;    // Property to sort by (index)

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}


  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes:', changes); // Log changes to inputs
    if (changes['filteredForOf']) {
      console.log('Filtered Data Changed:', this.filteredForOf); // Check if data is received
      this.updateView(); // Update the view with the new data
    }
  }

  private updateView(){
    
    console.log("ForOF: ",this.filteredForOf)
    this.viewContainer.clear();

    // Optionally filter and sort the data
    let filteredSortedData = this.filteredForOf;
    
    filteredSortedData.forEach(item => {console.log(item[this.filteredForFilterField]); console.log(item); return null} )

    // Apply filter if a property and value are provided
    if (this.filteredForFilterField && this.filteredForFilterType) {
      filteredSortedData = filteredSortedData.filter((item) => item[this.filteredForFilterField] === this.filteredForFilterType);
    }
    console.log(filteredSortedData)
    // Apply sorting if a property is provided
    if (this.filteredForSortBy) {
      filteredSortedData = filteredSortedData.sort((a, b) => a[this.filteredForSortBy] - b[this.filteredForSortBy]);
    }

    // Render each filtered/sorted item
    if (filteredSortedData && filteredSortedData.length) {
      filteredSortedData.forEach((item) => {
        console.log('Rendering Item:', item); // Debugging
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item });
      });
    } else {
      console.log('No items to render.'); // Debugging when there are no items
    }

  }
  

}



// import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// @Directive({
//   selector: '[myFor]'
// })
// export class FilteredForOfDirective {
//   @Input() myForOf!: any[]; // Just a regular input property

//   constructor(
//     private templateRef: TemplateRef<any>,
//     private viewContainer: ViewContainerRef
//   ) {}

//   ngOnInit() {
//     console.log(this.myForOf)
//     this.updateView(); // Call a method to render the items when initialized
//   }

//   private updateView() {
//     // Clear the container before updating the view
//     this.viewContainer.clear();

//     // Loop through the items and create an embedded view for each item
//     this.myForOf.forEach((item, index) => {
//       this.viewContainer.createEmbeddedView(this.templateRef, {
//         $implicit: item,
//         index: index
//       });
//     });
//   }
// }
