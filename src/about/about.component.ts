import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  width:string = '25';
  altImg: string = 'imagenPerfil';
  imageURL: string = 'profilePic.jpg';
  profileSize: number = 400;
  location = {
    src: 'placeholder.png',
    alt: 'location',
  };
  mail = {
    address: 'serranomilagros23@gmail.com',
    src: './icons/mail.png',
    alt: 'email',
  };
  cv = {
    src: './icons/document.png',
    src2: './icons/document(1).png',
    alt: 'curriculumVitae'
  };
  github = {
    url: 'https://github.com/MilagrosSerrano', 
    src: './icons/github.png',
    src2: './icons/github(1).png',
    alt: 'gitHub'
  };
  linkedin = {
    url: 'https://www.linkedin.com/in/milagros-serrano-4a49b7307/',                                                              
    src: './icons/linkedin.png',
    src2: './icons/linkedin(1).png',
    alt: 'linkedin'
  }
}
