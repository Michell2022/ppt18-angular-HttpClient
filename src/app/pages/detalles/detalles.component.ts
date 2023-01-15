import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  id!: number;

  obtenerInfo: any = {};

  constructor(private router: ActivatedRoute, private info: DataService) { }


  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.info.getItem(this.id).subscribe((obtdata) => { this.obtenerInfo = obtdata })
  }

}
