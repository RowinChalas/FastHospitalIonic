import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  slides:slide[]=[
    {
      titulo:'Bienvenido',
      subtitulo:'A Fast Hospital',
      img:'assets/doctorr.svg'
    },
    {
      titulo:'Tu salud',
      subtitulo:'Es primero',
      img:'assets/doctora.svg'
    }
  ]
  constructor() { }

  ngOnInit() {
  //  console.log("nada");
  }

}

interface slide{
  titulo:string
  subtitulo:String
  img:String
}
