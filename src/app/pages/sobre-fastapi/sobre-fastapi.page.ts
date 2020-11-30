import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sobre-fastapi',
  templateUrl: './sobre-fastapi.page.html',
  styleUrls: ['./sobre-fastapi.page.scss'],
})
export class SobreFastapiPage implements OnInit {

  constructor(private navigateController:NavController) { }

  ngOnInit() {
  }
  onBackReload(){
    this.navigateController.navigateForward('/home-fast')
    setTimeout(e=>{

      window.location.reload()
    },50)
  }
}
