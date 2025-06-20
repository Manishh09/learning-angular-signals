import { AfterContentInit, Component, contentChild, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true

})
export class CardComponent  implements AfterContentInit {

  // access references using @ContentChild query

  // header
  @ContentChild('header') cardHeaderRef?: ElementRef<HTMLElement>;

  // body

  @ContentChild('body') cardBodyRef?: ElementRef<HTMLElement>;

  // footer
  @ContentChild('footer') cardFooterRef?: ElementRef<HTMLElement>;


  // contentChildren example

  @ContentChildren('body') cardBodyChildren?: QueryList<ElementRef<HTMLElement>>;



  ngAfterContentInit(): void {
    console.log("%cCD is triggered in Card Component", "color:blue");
    console.log("Card Header Content:", this.cardHeaderRef);
    console.log("Card Body Content:", this.cardBodyRef);
    console.log("Card Footer Content:", this.cardFooterRef);

    console.log("Card Body Children Content:", this.cardBodyChildren);
    
  }

}
