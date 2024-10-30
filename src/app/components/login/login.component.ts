import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAccessService } from '../../services/user-access.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginTok: boolean = false;
  userExist: boolean= false;

  private accessService = inject(UserAccessService);
  

  loginForm  = new FormGroup({
  email: new FormControl('', [
    Validators.required,
    Validators.email
  ]),
  password: new FormControl('', [
    Validators.required,
  ]),
})

 
userTok() {
  this.loginTok = true;
}
}
