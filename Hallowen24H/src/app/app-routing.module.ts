import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadpageComponent } from './components/loadpage/loadpage.component';


const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "", component: LoadpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
