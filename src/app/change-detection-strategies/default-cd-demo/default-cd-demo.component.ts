import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { DefaultCdDemoOneComponent } from "../default-cd-demo-one/default-cd-demo-one.component";
import { DefaultCdDemoTwoComponent } from "../default-cd-demo-two/default-cd-demo-two.component";

@Component({
  selector: 'app-default-cd-demo',
  standalone: true,
  imports: [DefaultCdDemoOneComponent, DefaultCdDemoTwoComponent],
  templateUrl: './default-cd-demo.component.html',
  styleUrl: './default-cd-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.Default // this is implicit
  
})
export class DefaultCdDemoComponent implements DoCheck{
  count = 0

  clearIntl: any;

  inc() {
    this.count++;
  }

  incWithInterval() {
   this.clearIntl =  setInterval(() => {
      this.count++
    }, 1000)
  }

  stop(){
    clearInterval(this.clearIntl)
  }
  ngDoCheck(): void {
    console.log("%cCD is running in DefaultCDDemoComponent", "color:green");
      
  }

}
