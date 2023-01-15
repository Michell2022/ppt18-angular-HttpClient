import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path:'', component:HomeComponent },
  { path:'detalles/:id', component:DetallesComponent },
  { path:'404', component:BreakingComponent },
  { path:'**', redirectTo:'404', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
