import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  width: string = '22';
  altImg: string = 'imagenPerfil';
  imageURL: string = 'profilePic.jpg';
  profileSize: number = 400;
  location = {
    src: '/assets/images/placeholder.png',
    alt: 'location',
  };
  mail = {
    address: 'serranomilagros23@gmail.com',
    src: './icons/mail.png',
  };
  cv = {
    src: './icons/document.png',
    alt: 'curriculum_vitae',
  };
  github = {
    url: 'https://github.com/MilagrosSerrano',
    src: './icons/github.png',
  };
  linkedin = {
    url: 'https://www.linkedin.com/in/milagros-serrano-4a49b7307/',
    src: './icons/linkedin.png',
  };
}
