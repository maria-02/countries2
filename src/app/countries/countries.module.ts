import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { ButtonComponent } from './components/button/button.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    NavbarComponent,
    CountryCardComponent,
    ButtonComponent,
    CountriesListComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MaterialModule
  ]
})
export class CountriesModule { }
