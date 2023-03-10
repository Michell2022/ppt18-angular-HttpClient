import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';
import { BreakingComponent } from './breaking/breaking.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    DetallesComponent,
    BreakingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    DetallesComponent,
    BreakingComponent
  ]
})
export class PagesModule { }
