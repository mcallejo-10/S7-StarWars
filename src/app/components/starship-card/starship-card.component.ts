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

  img: string = "assets/placeholder.jpg";
  sanitizer: any;

  ngOnInit() {
    this.starshipService.getSelectedShip().subscribe((ship: Starship) => {
      this.selectedShip = ship;
      this.getImageByid(this.selectedShip.url);
      console.log("en init", this.selectedShip);
    });
  }
  getImageByid(url: string) {

    const id = url?.match(/(\d+)\/$/)?.[1];

    this.starshipService.getImage(id!).subscribe({      
      next: (blob) => {
        const objectURL = URL.createObjectURL(blob); // Convertimos el blob en una URL temporal
        this.img = this.sanitizer.bypassSecurityTrustUrl(objectURL); // Sanitizamos la URL
      },
      error: (error) => console.error('Error al cargar la imagen:', error)
    });
    console.log(this.img);
  

  }
}
