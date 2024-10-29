import { Component, inject } from "@angular/core";
import { Starship } from "../../interfaces/starships";
import { StarshipsService } from "../../services/starships.service";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: "app-starship-card",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./starship-card.component.html",
  styleUrl: "./starship-card.component.scss",
})
export class StarshipCardComponent {
  starshipService = inject(StarshipsService);
  route = inject(ActivatedRoute);
  selectedShip: Starship = ({
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: [],
    films: [],
    created: '',
    edited: '',
    url: ''
  });

  imgShip: string = "assets/placeholder.jpg";
  sanitizer: any;

  ngOnInit() {
    this.starshipService.getSelectedShip().subscribe((ship: Starship) => {
      this.selectedShip = ship;
      this.imgShip =  this.starshipService.getImageByUrl(this.selectedShip.url);
    });
  }  
}
