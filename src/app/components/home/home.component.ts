import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiResult, Starship } from '../../interfaces/starships';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  starshipService = inject(StarshipsService);
  route = inject(ActivatedRoute);




}
