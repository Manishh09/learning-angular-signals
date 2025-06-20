import { Component, contentChild, contentChildren, effect, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-signal-based-card',
  imports: [],
  templateUrl: './signal-based-card.component.html',
  styleUrl: './signal-based-card.component.scss',
  standalone: true
})
export class SignalBasedCardComponent {
  // Component logic goes here

  //***************** contentChild Signal API****************/

  // access references using contentChild Signal API

  // header
  cardHeaderRef = contentChild<ElementRef<HTMLElement>>('header');

  // description
  cardDescriptionRef = contentChild<ElementRef<HTMLElement>>('description');
  // body
  cardBodyRef = contentChild<ElementRef<HTMLElement>>('body');
  // footer
  cardFooterRef = contentChild<ElementRef<HTMLElement>>('footer');

  //***************** contentChildren Signal API****************/
  
  // access references using contentChildren Signal API
  cardBodyRefs = contentChildren<ElementRef<HTMLElement>>('body');

  //  log data using Effect API
  constructor() {
    effect(() => {
      console.log("ContentChild Signal APIs");

      console.log("contentChild - header", this.cardHeaderRef());
      console.log("contentChild - description", this.cardDescriptionRef());

      console.log("contentChild - body", this.cardBodyRef());
      console.log("contentChild - footer", this.cardFooterRef());

      console.log("contentChildren - body", this.cardBodyRefs());
    })
  }
}
