import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck {
  title = 'Welcome to Learning Angular Signals Session';

  ngDoCheck(): void {
   console.log("%cCD is triggered in App Component", "color:red");
  }
  
}
