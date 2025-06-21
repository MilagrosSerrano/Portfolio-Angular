import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(public router: Router) {}

  menu = {
    src: './icons/menu.png',
    src2: './icons/close.png',
    alt: 'menu',
    width: '25',
  };

  volver = {
    src: './icons/volver.png',
    alt: 'volver',
    width: '25'
  }

  toggle: boolean = false;

  get onContact(): boolean {
    return this.router.url === '/contact';
  }

  setToggle() {
    setTimeout(() => {
      this.toggle = !this.toggle;
    }, 200);
  }

  scroll(el: string, position: ScrollLogicalPosition) {
    document
      .getElementById(el)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: `${position}`,
        inline: 'center',
      });
  }

  handleClick(el: string, position: ScrollLogicalPosition) {
    this.setToggle();
    this.scroll(el, position);
  }
}
