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
  currentUserEmail = signal<string>('');
  isLogged = signal<boolean>(false);
  userName = signal<string>('');

  constructor() { }

  register(userData: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, userData);
  }

  checkEmailExists(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`);
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    this.currentUserEmail.set(credentials.email);
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  isLoggedIn() {
    const token = sessionStorage.getItem('authToken');
    if (token != null) {
      this.isLogged.set(true);
    } else {
      this.isLogged.set(false);
    }
  }

  logout() {
    sessionStorage.removeItem('authToken');
    this.isLogged.set(false);
  }

}
