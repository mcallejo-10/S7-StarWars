import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResult } from '../interfaces/starships';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private baseUrl: string = 'https://swapi.dev/api/starships/';

  httpClient = inject(HttpClient)
  getAll() {
    return this.httpClient.get<any>(this.baseUrl);
  }

}



