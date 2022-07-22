import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'ng-countries';

  constructor(){ }

  ngOnInit(): void {
    console.log('El componente se inicia');
  }

}
