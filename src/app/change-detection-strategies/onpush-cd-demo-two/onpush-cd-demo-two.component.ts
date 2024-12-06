import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-onpush-cd-demo-two',
  standalone: true,
  imports: [],
  templateUrl: './onpush-cd-demo-two.component.html',
  styleUrl: './onpush-cd-demo-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushCdDemoTwoComponent implements DoCheck{

  count = 0


  inc() {
    this.count++;
  }
  ngDoCheck(): void {
    console.log("%cCD is triggered in OnpushCdDemoTwoComponent", "color:blue");
  }
}
