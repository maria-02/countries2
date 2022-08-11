import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.paramMap.get('name'));
    this.countriesService
      .getCountryByName(
        this.actRoute.snapshot.paramMap.get('name') || 'Uruguay'
      )
      .subscribe((resp) => console.log(resp));
  }
}
