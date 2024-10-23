import { Component, inject } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute } from '@angular/router';
import { Starship } from '../../interfaces/starships';

@Component({
  selector: 'app-starships-list',
  standalone: true,
  imports: [],
  templateUrl: './starships-list.component.html',
  styleUrl: './starships-list.component.scss'
})
export class StarshipsListComponent {
 
  arrayShips: Starship[] = [];
//   actualShip: Starship = {
//     name: '',
//     model: '',
//     manufacturer: '',
//     cost_in_credits: '',
//     length: '',
//     max_atmosphering_speed: '',
//     crew: '',
//     passengers: '',
//     cargo_capacity: '',
//     consumables: '',
//     hyperdrive_rating: '',
//     MGLT: '',
//     starship_class: '',
//     pilots: [],
//     films: [],
//     created: '',
//     edited:'',
//     url: ''
// }



  starshipService = inject(StarshipsService);
  route = inject(ActivatedRoute);


  ngOnInit() {
    this.starshipService.getAll().subscribe((res: any) => {
      this.arrayShips = res.results;
    })
  }

}
