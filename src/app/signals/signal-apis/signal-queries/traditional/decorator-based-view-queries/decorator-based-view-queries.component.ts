import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from "../../child/child.component";

@Component({
  selector: 'app-decorator-based-view-queries',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './decorator-based-view-queries.component.html',
  styleUrl: './decorator-based-view-queries.component.scss',
})
export class DecoratorBasedViewQueriesComponent implements AfterViewInit {


  // Query a single element
  @ViewChild('header')
  headerElement?: ElementRef<HTMLElement>;

  // Query multiple elements
  @ViewChildren('itemDiv') itemElements?: QueryList<ElementRef<HTMLElement>>;

  // Access child component using ViewChild
  @ViewChild(ChildComponent) childComponent?: ChildComponent;
  items = [1, 2, 3];

  ngAfterViewInit() {
    // We can access headerElement here
    //console.log('Header element:', this.headerElement?.nativeElement);

    // Log query list of itemElements
    console.log('Item elements:', this.itemElements?.toArray());
    
    
    // We can access initial itemElements here
    console.log('Initial item elements count:', this.itemElements?.length);

    // access the child component method
    //console.log('Child component title:', this.childComponent?.getTitle());

    // subscribe to changes in itemElements
    this.itemElements?.changes.subscribe((data)=> {
      console.log('Item elements changed:', data.toArray());
      console.log('Updated item elements count:', this.itemElements?.length);
    })

  }

  addItem() {
    // When we add a new item, @ViewChildren doesn't automatically update
    // until next change detection cycle, and we need to manually subscribe
    // to changes to react to the updated list
    this.items.push(this.items.length + 1);


  }
}
