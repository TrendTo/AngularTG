import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  nombre: string = 'Maria'
  apellido:string = 'Perez'
  alumno:any = {
    nombre: 'Carlos',
    apellido: 'Montenegro'
  }
  imagen:string = 'https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png'
  newtexto:string = 'Test'

  correo:string = ''
  pass:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    console.log(this.correo)
    console.log(this.pass)
  }

  senddoble(){
    alert('Doble Click')
  }

  validKey(evento){
    if(evento.key == 'Enter'){
      console.log('Enviando...')
      this.send()
    }
  }

  tam1(ev){
    ev.srcElement.style.width = '100px'
    ev.srcElement.style.heigth = '100px'
  }

  tam2(ev){
    ev.srcElement.style.width = '200px'
    ev.srcElement.style.heigth = '200px'
  }

}
