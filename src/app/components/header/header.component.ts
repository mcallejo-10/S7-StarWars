import { Component, effect, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private authService = inject(AuthService);
  isLogged: boolean = false;
  userName: string = '';

  constructor() {
    effect(() => {
      //signal
      this.isLogged = this.authService.isLogged();
    })
  }


  getName() {
    this.authService.isLoggedIn();
    if (this.isLogged == true) {
      this.authService.getUserByEmail().subscribe({
        next: (user) => {
          this.userName = user.name;
        },
        error: (error) => {
          this.userName = 'Userrrr'
        }
      });
    }
  }

  logout() {
    this.isLogged = false;
    this.authService.logout();
    console.log('is loged??:', this.isLogged);
    
  }

}
