import { Component, OnInit, Output } from '@angular/core';
import { ActionSheetController, NavController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-popover-email-name',
  templateUrl: './popover-email-name.component.html',
  styleUrls: ['./popover-email-name.component.scss'],
})
export class PopoverEmailNameComponent implements OnInit {

  observable:Observable<any>;

  user:updateDato={
    name:'',
    email:'',
    token:''
  };


  seActualizo=false

    @Output() var = false;

  constructor(private popoverController:PopoverController,    
    private actionSheetController:ActionSheetController,
    private doctrService:DoctorService,
    private navController:NavController) {
    this.user.token = localStorage.getItem("id")
    this.user.name = localStorage.getItem("name")
    this.user.email = localStorage.getItem("email")
  }

  ngOnInit() {
    
  }

  updateEmail(){
    //console.log(this.user);

    if(this.user.name!='' && this.user.email!=''){

      this.observable = this.doctrService.editarUsuairo(this.user)
      
      this.observable.subscribe(d=>{
        let data = d;
        
      this.cargarStorage()
      this.presentActinSheetCorrecto()
      this.seActualizo=true
      this.popoverController.dismiss(
        {
        seActualizo:this.seActualizo
      }).then( fn=>{this.seActualizo=false});
      //refrescar la app
      })
      

    }else{
      this.presentActinSheetIncorrecto();
    }
  }

  onEmail(email){
    this.user.email = email 
  }
  onName(name){
    this.user.name = name
  }

  cargarStorage(){
    localStorage.setItem("name",this.user.name)
    localStorage.setItem("email",this.user.email)
  }


  async presentActinSheetCorrecto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Estado',
      //mode:"ios",
      cssClass: 'my-custom-class',
      buttons: [{
        cssClass:'succes',
        text: 'Acutalizacion Exitosa',
        role: 'destructive',
        icon: 'checkmark-circle-outline',
        handler: () => {
        //  console.log('Delete clicked');
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
        text: 'Datos No validos',
        role: 'destructive',
        icon: 'alert-circle-outline',
        handler: () => {
        //  console.log('Delete clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
interface user{
  name:string
  email:string
}

interface updateDato{
  name:string
  email:string
  token:string
}