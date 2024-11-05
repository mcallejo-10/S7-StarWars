import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiResult, Starship } from '../../interfaces/starships';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StarshipsListComponent } from '../starships-list/starships-list.component';
import { StarshipCardComponent } from '../starship-card/starship-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, StarshipsListComponent, StarshipCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  starshipService = inject(StarshipsService);
  route = inject(ActivatedRoute);
}
