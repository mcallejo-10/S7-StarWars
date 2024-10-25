import { Component, inject } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute } from '@angular/router';
import { ApiResult, Starship } from '../../interfaces/starships';

@Component({
  selector: 'app-starships-list',
  standalone: true,
  imports: [],
  templateUrl: './starships-list.component.html',
  styleUrl: './starships-list.component.scss'
})
export class StarshipsListComponent {
 
  nextUrl: string | null = "https://swapi.dev/api/starships/";
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
    this.starshipService.getAll(this.nextUrl)!.subscribe((res: ApiResult) => {
      this.arrayShips = res.results;
      this.nextUrl = res.next;
    console.log('on init 1', this.nextUrl)

    })
    console.log('on init 2', this.nextUrl)

  }
  showMore(){
    console.log('showMore1', this.nextUrl)
    if(this.nextUrl != null){
      this.starshipService.getAll(this.nextUrl)!.subscribe((res: ApiResult) => {
        this.arrayShips.push(...res.results);
        this.nextUrl = res.next;
      })

    }
    console.log('showMore2', this.nextUrl)
    
  }
}
