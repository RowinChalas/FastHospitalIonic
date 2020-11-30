import { Component, OnInit } from '@angular/core';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-popover-password',
  templateUrl: './popover-password.component.html',
  styleUrls: ['./popover-password.component.scss'],
})
export class PopoverPasswordComponent implements OnInit {

  user:user={
    passwordOld:'',
    passwordNew:'',
    token:''
  };
  constructor(private popoverController:PopoverController,
            private actionSheetController:ActionSheetController,
            private serviceDoctor:DoctorService) {
              this.user.token = localStorage.id;

  }

  ngOnInit() {
    
  }

  updatePassword(){
   // console.log(this.user);

    if(this.user.passwordNew.length>=8 && this.user.passwordOld!=''){

      this.serviceDoctor.editarPassword(this.user).subscribe(d=>{
        let data= d;
        // pendiente  continuar aca
        if(data.ok){

          this.presentActinSheetCorrecto();
          this.popoverController.dismiss()
        }else{
          this.presentActinSheetIncorrecto()
        }
        //this.popoverController.dismiss()
      })
    } else{
      
      this.presentActinSheetIncorrecto()
    }
  }

  onPasswordNew(passwordNew){
    this.user.passwordNew = passwordNew
  }
  onPasswordOld(passwordOld){
    this.user.passwordOld = passwordOld
  }


  async presentActinSheetCorrecto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Estado',
      cssClass: 'my-custom-class',
      buttons: [{
        cssClass:'succes',
        text: 'Acutalizacion Exitosa',
        role: 'destructive',
        icon: 'checkmark-circle-outline',
        handler: () => {
         // console.log('Delete clicked');
        }
      }]
    });
    await actionSheet.present();
  }

    async presentActinSheetIncorrecto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Estado',
      cssClass: 'rojo',
      buttons: [{
        cssClass:'mi-button-danger',
        text: 'Datos Incorrectos',
        role: 'destructive',
        icon: 'alert-circle-outline',
        handler: () => {
         // console.log('Delete clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
interface user{
  passwordOld:string
  passwordNew:string
  token:string
}