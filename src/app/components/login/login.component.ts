import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { Router, RouterLink } from '@angular/router';
import { LoginRequest } from '../../interfaces/login';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isValidEmail: boolean = false;
  userExist: boolean = false;
  errorMessage!: string;

  
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });
  
  private authService = inject(AuthService);

  constructor(private fb: FormBuilder, private auth: AuthService,
    private router: Router
  ) { }
  
  checkEmailLogin() {
    const loginEmail: string = this.loginForm.get('email')?.value?.toLowerCase() || '';
    this.authService.checkEmailExists(loginEmail).subscribe({
      next: (users: User[]) => {
        if (users.length > 0) {
            this.userExist = true;
            this.isValidEmail = true;
            console.log('en next', users);
            
          } else {
            console.log('en else', users);
            this.userExist = false;
            this.isValidEmail = true;
            this.router.navigate(['/register'])
          }
        },
        error: (error: string) => {
          console.error('Error al verificar email:', error);
          this.errorMessage = 'Error al verificar email';
          this.isValidEmail = false;
        }
      })
  }

  userLogin() {
    const credentials: LoginRequest = {
      email: this.loginForm.get('email')?.value || '',
      password: this.loginForm.get('password')?.value || ''      
    };
    this.authService.login(credentials).subscribe({
      next: (response) => {
        sessionStorage.setItem('authToken', response.accessToken);
        console.log('Login exitoso', response.accessToken);
      },
      error: (error) => {       
        this.errorMessage = 'Wrong password' 
        console.error('Error en login', error);
      }
    });
    
  }



}
