import { ChangeDetectionStrategy, Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [],
  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuantityComponent {

  title = 'My Quantity Component';

  // // @Input decorator is used to pass data from parent to child component
  // @Input()
  // quantity = 0;
  
  
  // // @Output decorator is used to pass data from child to parent component
  // @Output() 
  // quantityChange = new EventEmitter<number>();

  quantity = model(0); // Local state for quantity
  increment() {
    this.quantity.update((prev) => prev + 1); // Update the quantity using the model API
    // this.quantity++;
    // this.quantityChange.emit(this.quantity); // Emit the new quantity value to the parent component
  }

  decrement() {
    // if(this.quantity > 0){
    //   this.quantity--;
    //   this.quantityChange.emit(this.quantity); // Emit the new quantity value to the parent component
    // }
    this.quantity.update((prev) => prev - 1);
  }
}
