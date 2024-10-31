import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 
  // isLoading = false;
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
  constructor(private fb: FormBuilder,private auth: AuthService,
    private router: Router
  ) {}
 

  onRegister(): void {
    if (this.registerForm.valid) {
      // this.isLoading = true;
      this.errorMessage = '';


      const userData: User = {
        name: this.registerForm.get('name')?.value || '',
        lastName: this.registerForm.get('lastName')?.value || '',
        email: this.registerForm.get('email')?.value?.toLowerCase() || '',
        password: this.registerForm.get('password')?.value || ''
      };

      this.authService.checkEmailExists(userData.email!)
        .subscribe({
          next: (users: User[]) => {
            if (users.length > 0) {
            console.log('en next regis', users);
            
            this.errorMessage = 'This email is already registered';
            // this.isLoading = false;
          } else {
              console.log('en else regis', users);
              this.authService.register(userData)
                .subscribe({
                  next: (response: User) => {
                    console.log('Usuario registrado:', response);
                    // this.isLoading = false;                    
                    this.router.navigate(['/login']);
                  },
                  error: (error:string) => {
                    console.error('Error al registrar:', error);
                    this.errorMessage = 'Error al registrar usuario';
                    // this.isLoading = false;
                  }
                });
            }
          },
          error: (error: string) => {
            console.error('Error al verificar email:', error);
            this.errorMessage = 'Error al verificar email';
            // this.isLoading = false;
          }
        });
    }
  }
}
