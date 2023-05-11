import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  changeColor: boolean;

  constructor() {
    this.changeColor = false;
  }

  changeColorButton(): void {
    this.changeColor = !this.changeColor;
  }
}
