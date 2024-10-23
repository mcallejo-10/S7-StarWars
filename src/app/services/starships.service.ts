import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResult, Starship } from '../interfaces/starships';
import { SplitInterpolation } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private baseUrl: string = 'https://swapi.dev/api/starships/';
  httpClient = inject(HttpClient)
  ship: Starship = {
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
    }

  getAll() {
    return this.httpClient.get<ApiResult>(this.baseUrl);
  }
  getShipByName(urlShip:string) {
    
     
    return this.httpClient.get<ApiResult>(urlShip);


  }

}



