import { AfterContentInit, Component, contentChild, ContentChild, ElementRef } from '@angular/core';

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
  @ContentChild('header') header?: ElementRef<HTMLElement>;
  // body
  
  // footer





  ngAfterContentInit(): void {
    console.log("%cCD is triggered in Card Component", "color:blue");
    console.log("Card Header Content:", this.header);
    
  }

}
