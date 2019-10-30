import { ChoixMonstreComponent } from './components/choix-monstre/choix-monstre.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadpageComponent } from './components/loadpage/loadpage.component';


const routes: Routes = [
  {path: "", component: LoadpageComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "selectmonstre", component: ChoixMonstreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
