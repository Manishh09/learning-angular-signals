import { Component } from '@angular/core';
import { QuantityComponent } from "../quantity/quantity.component";

@Component({
  selector: 'app-model-api-demo',
  standalone: true,
  imports: [QuantityComponent],
  templateUrl: './model-api-demo.component.html',
  styleUrl: './model-api-demo.component.scss'
})
export class ModelApiDemoComponent {
  pageTitle = 'Model API Demo';

  // Model API is used to pass data from parent to child component and vice versa
  // It is a combination of @Input and @Output decorators

  quantity = 0;

  // get data from child component
  onQuantityChange(event: number) {
    console.log('Quantity from child component:', event);
    this.quantity = event;
  }
     
}
