import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre:string
  apellido:string
  excelencia:boolean

  constructor(){
    this.nombre=this.nombre
    this.apellido=this.apellido
    this.excelencia=this.excelencia
  }
}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  alumnos:Alumno = new Alumno()
  ListaAlumnos:Array<Alumno> = new Array<Alumno>()

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.ListaAlumnos.push({
      nombre:this.alumnos.nombre,
      apellido:this.alumnos.apellido,
      excelencia:this.alumnos.excelencia
    })
    this.alumnos.nombre = ''
    this.alumnos.apellido = ''
    this.alumnos.excelencia = false
  }
}
