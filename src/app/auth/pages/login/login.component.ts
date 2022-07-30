import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorExists: boolean = false;
  hide = true;
  email = new FormControl('juan.cruz@gmail.com', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('Abc123', [
    Validators.required,
    Validators.minLength(6),
  ]); // segundo parámetro es las cosas que quiero validar

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

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
        email: this.email.value!,
        password: this.password.value!,
      })
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.errorExists = false;
          this.authService.setAuth(resp);
          this.router.navigate(['/countries/home']);
        }, //la función que se ejecuta cuando subscribe da ok
        error: (e) => {
          console.error('Error', e);
          this.authService.setAuth(e);

          this.dialog.open(DialogComponent);
          this.errorExists = true; //por si quiero mostrar un msj de error en el template (y no como diálogo)
        }, //cuando da error
        complete: () => console.info('Complete'), //cuando ciclo de subrcribe finaliza
      });
  }
}
