import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.country);
  }

  goTo(id: string) {
    this.router.navigate([`/countries/detail/${id}`]);
    console.log(id);
  }
}
