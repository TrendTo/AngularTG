import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  valor:string = 'Este es un Texto de Prueba'
  dinero:number = 2454500
  ganancias:number = 0.54
  fecha:Date = new Date('06-01-2019')
  constructor() { }

  ngOnInit(): void {
  }

}
