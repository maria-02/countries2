import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '', // countries/
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'detail/:name', //los : indican que el valor será dinámico (params)
        component: DetailComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
