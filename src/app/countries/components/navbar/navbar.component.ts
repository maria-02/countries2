import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { LoginResp, User } from 'src/app/auth/interface/users.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  title = 'ng-countries';
  login!: LoginResp;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    console.log('El componente se inicia');
    this.login = JSON.parse(this.authService.getLocalStorage('login')!);
  }

  logOut() {
    this.authService.deleteLocalStorage('login');
    this.router.navigate(['/auth/login']);
  }
}
