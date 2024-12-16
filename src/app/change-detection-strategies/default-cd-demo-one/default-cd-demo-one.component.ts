import { Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-default-cd-demo-one',
    imports: [],
    templateUrl: './default-cd-demo-one.component.html',
    styleUrl: './default-cd-demo-one.component.scss'
})
export class DefaultCdDemoOneComponent implements DoCheck{

  count = 0


  inc() {
    this.count++;
  }
  ngDoCheck(): void {
    console.log("%cCD is triggered in DefaultCdDemoOneComponent", "color:blue");
  }
}
