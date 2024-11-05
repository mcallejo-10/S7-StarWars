import { Component, effect, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
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
      //signals
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
