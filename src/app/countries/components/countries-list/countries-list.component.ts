import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countries:any;

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {

    this.getCountriesFromService();

  }

  getCountriesFromService(){
    this.countriesService.getCountries().subscribe( resp => this.countries = resp);
  }

}
