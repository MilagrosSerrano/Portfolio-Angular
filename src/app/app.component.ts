import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }
  @HostListener('window:beforeunload')
  resetScroll() {
    window.scrollTo(0, 0);
  }
}
