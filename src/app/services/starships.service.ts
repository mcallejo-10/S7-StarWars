import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { ApiResult, Starship } from '../interfaces/starships';
import { SplitInterpolation } from '@angular/compiler';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private baseUrl: string = 'https://swapi.dev/api/starships/';
  httpClient = inject(HttpClient)
  shipUrl: string = '';
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

  getAll(url: string | null) {
    if (url) {
      return this.httpClient.get<ApiResult>(url);
    } else {
      return null;
    }
  }

  updateUrlShip(urlShip: string) {
    this.shipUrl = urlShip;
  
  }

  getSelectedShip(): Observable <Starship>{
    return this.httpClient.get<Starship>(this.shipUrl)
      
    
  }



}



