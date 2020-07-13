import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articulo } from '../model/productos';

@Component({
  selector: 'app-articulodetalle',
  templateUrl: './articulodetalle.component.html',
  styleUrls: ['./articulodetalle.component.scss']
})
export class ArticulodetalleComponent implements OnInit {

  informacion: articulo

  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.informacion = JSON.parse(this.ruta.snapshot.params.data)
  }

}
