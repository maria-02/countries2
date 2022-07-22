import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private URL: string = "https://restcountries.com/v3.1/all";

  constructor(private http: HttpClient) { }

  getCountries():Observable<any> {
    return this.http.get(this.URL)
  }
}
