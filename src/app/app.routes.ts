import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'contact',
    loadComponent: () =>
      import('../contact/contact.component').then((m) => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
