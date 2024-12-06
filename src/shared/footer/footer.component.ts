import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  width: string = '25';
  mail = {
    address: 'serranomilagros23@gmail.com',
    src: './icons/mail.png',
    alt: 'email',
  };
  github = {
    url: 'https://github.com/MilagrosSerrano',
    src: './icons/github.png',
    src2: './icons/github(1).png',
    alt: 'GitHub',
  };
  linkedin = {
    url: 'https://www.linkedin.com/in/milagros-serrano-4a49b7307/',
    src: './icons/linkedin.png',
    src2: './icons/linkedin(1).png',
    alt: 'Linkedin',
  };
}
