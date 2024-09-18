import { Component, OnInit, Signal, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  count = signal(0);

   //Computed signal are read-only signals that derive their value from other signals
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor(){
     //An effect is an operation that runs whenever one or more signal values change. 
   effect(()=>{
    console.log(this.count());
    console.log(this.doubleCount());
   })
  }

  ngOnInit(): void {
    this.count.set(2);

   // You cannot directly assign values to a computed signal. That is,
   //this.doubleCount.set(3);
  }

  onClick(event: any) {
    this.count.update(x => x + 1);
  }

}
