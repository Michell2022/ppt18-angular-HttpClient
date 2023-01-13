import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  entrada!:string[];

  constructor(private mydata:DataService){

  }

  ngOnInit(): void {
    this.mydata.getAll().subscribe( mydata => this.entrada = mydata);
  }

}
