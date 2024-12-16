import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, inject } from '@angular/core';
import { OnpushCdDemoOneComponent } from "../onpush-cd-demo-one/onpush-cd-demo-one.component";
import { OnpushCdDemoTwoComponent } from "../onpush-cd-demo-two/onpush-cd-demo-two.component";

@Component({
    selector: 'app-onpush-cd-demo',
    imports: [OnpushCdDemoOneComponent, OnpushCdDemoTwoComponent],
    templateUrl: './onpush-cd-demo.component.html',
    styleUrl: './onpush-cd-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushCdDemoComponent implements DoCheck{
  count = 0

  clearIntl: any;

  inc() {
    this.count++;
  }

  incWithInterval() {
   this.clearIntl =  setInterval(() => {
      this.count++;
    }, 1000)
  }

  stop(){
    clearInterval(this.clearIntl)
  }
  ngDoCheck(): void {
      console.log("%cCD is running in OnpushCdDemoComponent", "color:red");
      
  }

  

}
