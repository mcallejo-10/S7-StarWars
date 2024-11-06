import { Component, inject } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute } from '@angular/router';
import { Starship } from '../../interfaces/starships';
import { Film } from '../../interfaces/film';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {
  arrayUrlFilms: string[] = [];
  filmsArray: Film[] = [];

  starshipService = inject(StarshipsService);
  route = inject(ActivatedRoute);

  ngOnInit() {

    this.starshipService.getSelectedShip().subscribe({
      next: (ship: Starship) => {
        this.arrayUrlFilms = ship.films;
        this.arrayUrlFilms.forEach(film => {
          this.starshipService.getFilm(film).subscribe((film: Film) => {
            this.filmsArray.push(film);
          })
        })
      },
      error: (error) => {
        console.error('Error cargando film', error);
      }
    });

  }

  showImage(urlShip: string) {
    return this.starshipService.getImageByUrl('films/', urlShip);
  }
}
