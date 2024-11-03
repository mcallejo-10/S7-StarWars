import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { LoginResponse, LoginRequest } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;  
  
  constructor() { }
  
  register(userData: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, userData);
  }

  checkEmailExists(email: string): Observable<User[]> {
    console.log('heck email', email);
    
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`);
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  isLoggedIn():boolean{
    const token = sessionStorage.getItem('authToken'); 
    if(token){
      return true;
    }else {
      return false;
    }
  }

}
