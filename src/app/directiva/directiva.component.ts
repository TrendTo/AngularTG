import { Component, OnInit } from '@angular/core';

interface ProductoInterface{
  nombre:string
  stock:number
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  cargando:boolean = true
  nombres: Array<string> = ["Juan", "Ana", "Maria", "Burro"]
  tab:string = ''
  productos: Array<ProductoInterface> = [
    {
      nombre: 'Tabaco',
      stock: 25
    },
    {
      nombre: 'CocaCola',
      stock: 53
    },
    {
      nombre: 'Norteño',
      stock: 2
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  alternar(){
    this.cargando = !this.cargando
  }

  CambiarTab(valor:string){
    this.tab = valor
  }

}
