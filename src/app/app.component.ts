import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,NewComponentComponent],
  template: `<!--<router-outlet></router-outlet>-->
    <h1>curso de angular</h1>
    <app-new-component/>
  `,
})
export class AppComponent {
  title = 'my-first-project';
}

