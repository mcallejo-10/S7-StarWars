import { Component, effect, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../../interfaces/user';

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
  userName: string = 'a';
  userEmail: string = '';

  constructor() {
    effect(() => {
      //signal
      this.isLogged = this.authService.isLogged();
      this.userEmail = this.authService.currentUserEmail();
    })
  }
  ngOnInit() {
    this.authService.isLoggedIn();
    this.isLogged = this.authService.isLogged();
  }



  logout() {
    this.authService.logout();
    this.isLogged = this.authService.isLogged();
  }


}
