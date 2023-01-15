import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{



  entrada!:any[];

  
  constructor(private mydata:DataService, private router:Router){

  }

  ngOnInit(): void {
    this.mydata.getData().subscribe( mydata => this.entrada = mydata);
  }

  validar(id:number){
    this.router.navigate(['detalles',id])
  }

}
