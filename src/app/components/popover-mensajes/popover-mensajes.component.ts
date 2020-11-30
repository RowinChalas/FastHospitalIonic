import { Component, Input, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-mensajes',
  templateUrl: './popover-mensajes.component.html',
  styleUrls: ['./popover-mensajes.component.scss'],
})
export class PopoverMensajesComponent implements OnInit {

  @Input() titulo
  @Input() mensaje
  @Input() buttonText
  @Input() imgSrc

  constructor(private navController:NavController,
              private popoverController:PopoverController) { }

  ngOnInit() {
   // console.log(this.titulo);
  }


  close(){
    this.popoverController.dismiss();
  }
}
