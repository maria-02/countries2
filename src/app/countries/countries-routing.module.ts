import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailComponent } from "./pages/detail/detail.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    {
        path: '', // countries/
        children: [
            {    
                path:'home',
                component: HomeComponent
            },
            {
                path:'detail',
                component: DetailComponent
            },
            {
                path:'**',
                redirectTo: 'home' //TODO: poner 404
            }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CountriesRoutingModule {};