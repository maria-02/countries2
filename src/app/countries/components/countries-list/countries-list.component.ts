import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries: any;
  loader = true;

  constructor(private countriesService: CountriesService) {}

  displayedColumns: string[] = ['name', 'capital', 'region', 'languages'];

  ngOnInit(): void {
    this.getCountriesFromService();
  }

  getCountriesFromService() {
    this.countriesService.getCountries().subscribe((resp) => {
      this.countries = resp;
      this.loader = false;
    });
  }

  getValuesFromObject(obj: any) {
    //para la tabla
    console.log(obj);
    return obj ? Object.values(obj) : '-';
  }
}
