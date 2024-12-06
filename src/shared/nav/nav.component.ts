import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  menu = {
    src: './icons/menu.png',
    src2: './icons/close.png',
    alt: 'menu',
    width: '25',
  };
  toggle: boolean = false;

  setToggle() {
    setTimeout(() => {
      this.toggle = !this.toggle;
    }, 100);
  }
}
