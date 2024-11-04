import { Component, inject } from '@angular/core';
import { Pilot } from '../../interfaces/pilots';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute } from '@angular/router';
import { Starship } from '../../interfaces/starships';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent {
  arrayUrlPilots: string[] = [];
  pilotsArray: Pilot[] = [];

  starshipService = inject(StarshipsService);
  route = inject(ActivatedRoute);

  ngOnInit() {

    this.starshipService.getSelectedShip().subscribe({
      next: (ship: Starship) => {
        this.arrayUrlPilots = ship.pilots;
          this.arrayUrlPilots.forEach(pilot => {
      this.starshipService.getPilot(pilot).subscribe((pilot: Pilot) => {
        this.pilotsArray.push(pilot);
        console.log('pilots', pilot);
      })

    })
      },
      error: (error) => {
        console.error('Error cargando pilot', error);
      }
    });


  
    console.log('pa', this.pilotsArray);
  }

  showImage(urlShip: string) {
    return this.starshipService.getImageByUrl('characters/', urlShip);
  }


}
