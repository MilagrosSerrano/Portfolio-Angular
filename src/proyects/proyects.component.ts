import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css',
})
export class ProyectsComponent {
  widthT: string = '22';
  widthL: string = '18';
  widthP: string = '1100';
  pIcons = {
    proyect: {
      icon1: {
        src: './icons/external-link.png',
        alt: 'externalLink',
      },
      icon2: {
        src: './icons/external-link(1).png',
      },
    },
    github: {
      icon1: {
        src: './icons/github.png',
        alt: 'github',
      },
      icon2: {
        src: './icons/github(1).png',     
      },
    },
  };

  foodStore = {
    srcP: '/assets/images/proyects/foodStore.png',
    altP: 'foodStore',
    title: 'Nasty Food Store',
    tipo: 'Comida de Restaurante',
    description:
      'Muestra de los productos destacados del lugar y una sección de menú en donde se detallan todos los productos disponibles.',
    tech1: {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      alt: 'HTML',
    },
    tech2: {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      alt: 'Javascript',
    },
    linkP: 'https://nasty-food.netlify.app',
    linkG: 'https://github.com/MilagrosSerrano/Nasty-Food-Store',
  };

  tateti = {
    srcP: '/assets/images/proyects/tateti.png',
    altP: 'tateti',
    title: 'TA-TE-TI',
    tipo: 'Minijuego',
    description: 'Juego de dos jugadores apto para todo público en el que se buscan formar 3 figuras iguales en línea vertical u horizontal para ser el ganador de la partida.',
    tech1: {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      alt: 'HTML',
    },
    tech2: {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      alt: 'Javascript',
    },
    linkP: 'https://ta-te-ti-game.netlify.app',
    linkG: 'https://github.com/MilagrosSerrano/TA-TE-TI'
  };

  metas = {
    srcP: '/assets/images/proyects/metas.png',
    altP: 'metas',
    title: 'Metas App',
    tipo: 'Aplicación de metas',
    description: 'Podrás crear metas 100% personalizadas, en las que puedes ver de manera gráfica tus objetivos y que de esta manera sean más fáciles de cumplir y de visualizar el progreso.',
    tech1: {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      alt: 'Javascript',
    },
    tech2: {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      alt: 'React'
    },
    linkP: 'https://app-metas.netlify.app',
    linkG: 'https://github.com/MilagrosSerrano/Metas-App'
  };
}
