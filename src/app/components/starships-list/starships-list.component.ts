import { Component, inject } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiResult, Starship } from '../../interfaces/starships';
import { StarshipCardComponent } from '../starship-card/starship-card.component';

@Component({
  selector: 'app-starships-list',
  standalone: true,
  imports: [RouterLink, StarshipCardComponent],
  templateUrl: './starships-list.component.html',
  styleUrl: './starships-list.component.scss'
})
export class StarshipsListComponent {

  nextUrl: string | null = "https://swapi.dev/api/starships/";
  arrayShips: Starship[] = [];

  starshipService = inject(StarshipsService);
  route = inject(ActivatedRoute);



  ngOnInit() {
    this.starshipService.getAll(this.nextUrl)!.subscribe((res: ApiResult) => {
      this.arrayShips = res.results;
      this.nextUrl = res.next;
    })
  }

  showMore() {
    
    if (this.nextUrl != null) {
      this.starshipService.getAll(this.nextUrl)!.subscribe((res: ApiResult) => {
        this.arrayShips.push(...res.results);
        this.nextUrl = res.next;
      });
    }
  }
  
  getUrlShip(urlShip: string) {
    this.starshipService.updateUrlShip(urlShip);    
  }

  showImage(urlShip:string) {
    return this.starshipService.getImageByUrl(urlShip);
  }
}
