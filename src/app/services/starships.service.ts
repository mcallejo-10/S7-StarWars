import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { ApiResult, Starship } from '../interfaces/starships';
import { Observable } from 'rxjs';
import { Pilot } from '../interfaces/pilots';
import { Film } from '../interfaces/film';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private imgUrl: string = 'https://starwars-visualguide.com/assets/img/';
  // private imgPilotUrl: string = 'https://starwars-visualguide.com/assets/img/characters/';
  // private imgFilmstUrl: string = 'https://starwars-visualguide.com/assets/img/films/';

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

  getSelectedShip(): Observable<Starship> {
    console.log(this.shipUrl);
    return this.httpClient.get<Starship>(this.shipUrl)
    
  }


  getPilot(urlPilot: string) {
    return this.httpClient.get<Pilot>(urlPilot)
  }
  getFilm(urlPilot: string) {
    return this.httpClient.get<Film>(urlPilot)
  }
  getImageByUrl(type: string, url: string) {
    const id = url?.match(/(\d+)\/$/)?.[1];
    return this.imgUrl + type + id + '.jpg'
  }





}



