import { Component, effect, ElementRef, signal, viewChild, viewChildren } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-view-queries-demo',
  imports: [ChildComponent],
  templateUrl: './view-queries-demo.component.html',
  styleUrl: './view-queries-demo.component.scss',
  standalone: true
})
export class ViewQueriesDemoComponent {

  // viewChild signal API

  header = viewChild<ElementRef<HTMLElement>>('header');

  // viewChildren signal API
  itemElements = viewChildren<ElementRef<HTMLElement>>('itemDiv');
  constructor(){
    effect(() =>{
      console.log('Header element:', this.header()?.nativeElement);
      console.log('Item elements:', this.itemElements());
      
    })
  }

  items = signal([1, 2, 3]);
  addItem() {
    // When we add a new item, @ViewChildren doesn't automatically update
    // until next change detection cycle, and we need to manually subscribe in case of decorator based view queries
    
    // With signal API, we can use the signal to update the viewChildren
    // and it will automatically update the viewChildren
    // update signal
    this.items.update((prev) => [...prev, prev.length + 1]);


  }
}
