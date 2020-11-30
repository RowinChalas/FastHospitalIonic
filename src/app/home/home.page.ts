import { Component } from '@angular/core';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';

import { LoadingController } from '@ionic/angular';
import firebase from 'firebase';
import { firebaseConfig } from 'firebase.config';
import { AngularFireStorage } from '@angular/fire/storage'

firebase.initializeApp(firebaseConfig)

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private camera:Camera, private load:LoadingController,private storage:AngularFireStorage) {}
 
 
  foto(base64string){

    return console.log(base64string.detail.value);
    const path = 'FastApi/primera.jpeg'
    const ref = this.storage.ref(path)
    const task = this.storage.upload(path,"data:image/jpeg;base64,"+base64string)
  }


}
