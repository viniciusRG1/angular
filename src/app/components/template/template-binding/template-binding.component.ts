import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'vinicius';
  public age = 24;

  public srcValue = './images/foto.avif';
  public isDabled = false;
  public isTextDecoration = this.age >= 20 ? 'underline' : 'none'
  public sum(){
    return this.age++;
}
  public onKeyDown(event: any){
    return console.log(event)
  }
  public onMouseEvent(event:any){
    return console.log(event)
  }
}
