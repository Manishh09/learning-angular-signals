import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-onpush-cd-demo-one',
    imports: [],
    templateUrl: './onpush-cd-demo-one.component.html',
    styleUrl: './onpush-cd-demo-one.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushCdDemoOneComponent implements DoCheck{
  count = 0


  inc() {
    this.count++;
  }
  ngDoCheck(): void {
    console.log("%cCD is triggered in OnpushCdDemoOneComponent", "color:blue");
  }
}
