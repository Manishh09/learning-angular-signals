import { Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-default-cd-demo-two',
    imports: [],
    templateUrl: './default-cd-demo-two.component.html',
    styleUrl: './default-cd-demo-two.component.scss'
})
export class DefaultCdDemoTwoComponent implements DoCheck {

  
  count = 0


  inc() {
    this.count++;
  }

  ngDoCheck(): void {
    console.log("%cCD is triggered in DefaultCdDemoTwoComponent", "color:blue");
    
  }
}
