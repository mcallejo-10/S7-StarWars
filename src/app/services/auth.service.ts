import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
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
  currentUserEmail: string = '';
  isLogged = signal<boolean>(false);

  constructor() { }

  register(userData: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, userData);
  }

  checkEmailExists(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`);
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    this.currentUserEmail = credentials.email;
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  isLoggedIn() {
    const token = sessionStorage.getItem('authToken');
    console.log(token);
    
    if (token != null) {
      this.isLogged.set(true);
    } else {
      this.isLogged.set(false);
    }
  }
  getUserByEmail(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users?email=${this.currentUserEmail}`);
  }
  getUserInfo(): Observable<User> {
    const token = localStorage.getItem('authToken');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl}/users/me`, { headers });

  }

  logout() {
    sessionStorage.removeItem('authToken');
  }

}
