import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,NewComponentComponent, TemplateBindingComponent],
  styleUrls:['../styles.scss'],
  styles:[`h1{color:purple;}`],
  template: `<!--<router-outlet></router-outlet>-->
    <h1>curso de angular</h1>
    <app-template-binding></app-template-binding>
    <div class="theme-dark">
      <h1>curso de angular</h1>
      <app-new-component></app-new-component>
  </div>
  `,
})
export class AppComponent {}

