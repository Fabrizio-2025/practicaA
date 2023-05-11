import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  changeText: boolean;

  constructor() {
    this.changeText = false;
  }

  changeTextButton(): void {
    this.changeText = !this.changeText;
  }
}
