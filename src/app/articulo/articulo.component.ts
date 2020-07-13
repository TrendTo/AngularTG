import { Component, OnInit } from '@angular/core';
import { articulo } from '../model/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  productos:Array<articulo> = new Array<articulo>()
  constructor(private prodRuta: Router) { }

  ngOnInit(): void {
    this.productos.push(
      {
        nombre: 'Televisor',
        info: '32 pulgadas Full HD',
        precio: 354,
        stock: 23,
        mayorista: 275
      },
      {
        nombre: 'Laptop',
        info: 'Intel i7 1Tb con 16 RAM',
        precio: 1280,
        stock: 33,
        mayorista: 1100
      }
    )
  }

  parametro(item: articulo){
    this.prodRuta.navigate(['info', {data: JSON.stringify(item)}])
  }
}
