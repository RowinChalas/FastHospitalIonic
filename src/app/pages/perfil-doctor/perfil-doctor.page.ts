import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverEmailNameComponent } from 'src/app/components/popover-email-name/popover-email-name.component';
import { PopoverPasswordComponent } from 'src/app/components/popover-password/popover-password.component';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-perfil-doctor',
  templateUrl: './perfil-doctor.page.html',
  styleUrls: ['./perfil-doctor.page.scss'],
})
export class PerfilDoctorPage implements OnInit {

  user:user={
    email:'',
    name:'',
    sexo:''
  }
  userChangePassword:updatePassword={
    passwordOld:'',
    token:'',
    passwordNew:''
  }

  userChangeDato:updateDato={
    name:'',
    token:'',
    email:''
  }


  constructor(private popoverController:PopoverController,
              private doctorService:DoctorService,
              private navController:NavController) {
    this.user.name = localStorage.getItem("name")
    this.user.email = localStorage.email
    this.user.sexo = localStorage.sexo

    this.userChangeDato.email = localStorage.email
    this.userChangeDato.name = localStorage.name
    this.userChangeDato.token = localStorage.id

    
   }

  ngOnInit() {
    //sessionStorage.getItem('sexo')
  }


  atras(){
    console.log("atras");
  }

  
   async updateEmail(){
     
    const popover = await this.popoverController.create({
      component: PopoverEmailNameComponent,
      cssClass: 'my-custom-class',
      //event: ev,
      translucent: true,
      
    });

    await popover.present();

    const { data } = await popover.onDidDismiss()
    if(data){
      setTimeout(m=>{window.location.reload()},1000)
     }


  }

  async updatePassword(){

    const popover = await this.popoverController.create({
      component: PopoverPasswordComponent,
      cssClass: 'my-custom-class',
      //event: ev,
      translucent: true,
      
    });

    return await popover.present();
    console.log("update passsword");
  }
}
interface updatePassword{
  passwordOld:string
  token:string
  passwordNew:string
}

interface updateDato{
  name:string
  email:string
  token:string
}
interface user{
  name:string
  email:string
  sexo:string
}