import { Component, ViewEncapsulation } from '@angular/core';
import { SignalBasedCardComponent } from "../signal-based-card/signal-based-card.component";

@Component({
  selector: 'app-content-queries-demo',
  imports: [SignalBasedCardComponent, ],
  templateUrl: './content-queries-demo.component.html',
  styleUrl: './content-queries-demo.component.scss',
  standalone: true,

})
export class ContentQueriesDemoComponent {
  
}
