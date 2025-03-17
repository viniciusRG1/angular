
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { NewComponentComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  imports: [CommonModule, NewComponentComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit{
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public h2Input!: ElementRef;
  @ViewChild('NewComponentComponent') public childComponent!: NewComponentComponent
  ngAfterViewInit(){
    console.log(this.nameInput.nativeElement.value);
    console.log(this.h2Input.nativeElement.value);
    console.log(this.childComponent.name);
  }
}
