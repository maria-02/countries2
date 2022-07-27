import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('juan.cruz@gmail.com', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('123456', [
    Validators.required,
    Validators.minLength(6),
  ]); // segundo parámetro es las cosas que quiero validar

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  getErrorMessage(field: string) {
    if (field === 'email') {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
    } else if (field === 'password') {
      return this.password.hasError('required')
        ? 'Must enter a value'
        : 'Must contain more than 6 characters';
    }
    return '';
  }

  login() {
    console.log(this.email.value);
    console.log(this.password.value);
    this.authService
      .login({
        email: this.email.value,
        password: this.password.value,
      })
      .subscribe((response) => console.log(response));
  }
}
