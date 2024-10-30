import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 
  isLoading = false;
  errorMessage = '';

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',
      [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
      Validators.pattern('^(?=.*[A-Z])(?=.*\\d).{4,8}$')
      ])
  });

  private authService = inject(AuthService)
  router: any;
 

  onRegister(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';


      const userData: User = {
        name: this.registerForm.get('name')?.value || '',
        lastName: this.registerForm.get('lastName')?.value || '',
        email: this.registerForm.get('email')?.value || '',
        password: this.registerForm.get('password')?.value || ''
      };

      // verificamos si el email ya existe
      this.authService.checkEmailExists(userData.email!)
        .subscribe({
          next: (users: User[]) => {
            if (users.length > 0) {
              this.errorMessage = 'Este email ya está registrado';
              this.isLoading = false;
            } else {
              // Si el email no existe
              this.authService.register(userData)
                .subscribe({
                  next: (response: User) => {
                    console.log('Usuario registrado:', response);
                    this.isLoading = false;
                    // va al login
                    this.router.navigate(['/login']);
                  },
                  error: (error:string) => {
                    console.error('Error al registrar:', error);
                    this.errorMessage = 'Error al registrar usuario';
                    this.isLoading = false;
                  }
                });
            }
          },
          error: (error: string) => {
            console.error('Error al verificar email:', error);
            this.errorMessage = 'Error al verificar email';
            this.isLoading = false;
          }
        });
    }
  }
}
