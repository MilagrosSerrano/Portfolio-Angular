import { Component } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { AboutComponent } from '../about/about.component';
import { InfoComponent } from '../info/info.component';
import { TechComponent } from '../tech/tech.component';
import { ProyectsComponent } from '../proyects/proyects.component';
import { FooterComponent } from '../shared/footer/footer.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavComponent,AboutComponent,InfoComponent,TechComponent,ProyectsComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
