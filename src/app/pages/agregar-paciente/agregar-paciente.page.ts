import { Component, OnInit,Input, Type } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx'
import { PacienteService } from 'src/app/services/paciente.service';
import { Observable } from 'rxjs';
import { FuncioensService } from 'src/app/services/funcioens.service';
import { FormBuilder,FormControl, FormGroup , Validators} from '@angular/forms';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.page.html',
  styleUrls: ['./agregar-paciente.page.scss'],
})
export class AgregarPacientePage implements OnInit {

  paciente:ApiPaciente={
    AlergiasPaciente: '',
    ApellidoPaciente: '',
    CedulaPaciente: '',
    "Datos del doctor": true,
    "Datos del paciente": true,
    EmailPaciente: '',
    Fecha_NacimientoPaciente: '',
    Foto: "../../../assets/diversity_avatar_man_boy_sunglasses_people_icon_159090.svg",
    Nombre: '',
    NombrePaciente: '',
    Sexo: '',
    SexoPaciente: '',
    Tipo_SangrePaciente: '',
    Zodiaco: '',
    doctor: localStorage.id,
    idPaciente: 0
  };

  @Input() ok;

  signo:string ="Libra"
  
  fecha:any='2020-01-01';

  observable:Observable<any>

  seleccionoFoto=false

  
  constructor(private modalController:ModalController,
              private camera:Camera,
              private navController:NavController,
              private pacienteService:PacienteService,
              private funcioensService:FuncioensService,
              private formBuilder:FormBuilder,
              private load:LoadingController ) {
                
              }
  ngOnInit() {
    // this.transformarFechaPaciente('12-12-2020')
    //console.log(this.paciente)
    
  }
  

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
    cedula: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
    apellido:['',Validators.required],
    tipoSangre:['',Validators.required],
    sexo:['',[Validators.required]],
    alergias:['',Validators.required],
    zodiaco:['',Validators.required]

  });

  get name() {
    return this.form.get("name");
  }
  get email() {
    return this.form.get("email");
  }
  get cedula() {
    return this.form.get('cedula');
  }
  get apellido() {
    return this.form.get('apellido');
  }
  get zodiaco() {
    return this.form.get('zodiaco');
  }
  get tipoSangre() {
    return this.form.get('tipoSangre');
  }
  get alergias() {
    return this.form.get('alergias');
  }
  get sexo() {
    return this.form.get('sexo');
  }
  

  public errorMessages = {
    name: [
      { type: 'required', message: 'El Nombre es requerido' },
      { type: 'minlength', message: 'Name cant be longer than 100 characters' }
    ],
    email: [
      { type: 'required', message: 'El Email es requerido' },
      { type: 'pattern', message: 'Ingresar email valido' }
    ],
    cedula: [
      { type: 'required', message: 'La Cedula es requerido' },
      { type: 'minlength', message: 'Ingresar cedula Correcta' }
    ],
    apellido: [
      { type: 'required', message: 'El Apellido es requerido' },
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ],
    zodiaco: [
      { type: 'required', message: 'El Zodiaco es requerido' },
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ],
    tipoSangre: [
      { type: 'required', message: 'El tipo de Sangre es requerido' },
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ],
    alergias: [
      { type: 'required', message: 'Alergia es requerido' },
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ],
    sexo: [
      { type: 'required', message: 'Sexo es requerido' },
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ]

  };


  public submit(event) {


    console.log(event);
  }



  cambioFotoPorSexo(){

    if(this.seleccionoFoto){

    }else{
    
      if(this.sexo.value =='Femenino'){
      this.paciente.Foto = '../../../assets/diversity_avatar_girl_woman_black_hair_people_icon_159085.svg'
      }else{
        this.paciente.Foto ='../../../assets/diversity_avatar_man_boy_sunglasses_people_icon_159090.svg'
      }
    }
  }


  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation:true,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.paciente.Foto = 'data:image/jpeg;base64,' + imageData;
      this.seleccionoFoto=true
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }

    galeryPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType:this.camera.MediaType.PICTURE,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.paciente.Foto = 'data:image/jpeg;base64,' + imageData;
      this.seleccionoFoto=true
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }
  //---------------------------------------------------------

  async guardarPaciente(event){
    this.form.value.name
    this.paciente.CedulaPaciente=this.form.value.cedula;
    this.paciente.NombrePaciente=this.form.value.name
    this.paciente.ApellidoPaciente=this.form.value.apellido
    this.paciente.Tipo_SangrePaciente=this.form.value.tipoSangre
    this.paciente.EmailPaciente = this.form.value.email
    this.paciente.Zodiaco=this.form.value.zodiaco
    this.paciente.SexoPaciente=this.form.value.sexo
    this.paciente.AlergiasPaciente =this.form.value.alergias

    try
    {
    this.paciente.Fecha_NacimientoPaciente=this.fechaStrring(this.fecha)
    
    if(true){
      
      
      this.observable =  this.pacienteService.agregarPaciente(this.paciente)
      this.observable.subscribe(d=>{
        let data = d
        console.log(data);
      
      this.paciente.idPaciente = data.idPaciente  
      this.funcioensService.actualizarLocalStorage(this.paciente)
      //limpiar Valores
      this.paciente.CedulaPaciente='';
      this.paciente.NombrePaciente=''
      this.paciente.ApellidoPaciente='';
      this.paciente.Tipo_SangrePaciente=''
      this.paciente.EmailPaciente = ''
      this.paciente.Zodiaco=''
      this.paciente.SexoPaciente=''
      this.paciente.AlergiasPaciente =''
      this.cedula.setValue(null)
      this.name.setValue(null)
      this.apellido.setValue(null)
      this.tipoSangre.setValue(null)
      this.email.setValue(null)
      this.zodiaco.setValue(null)
      this.sexo.setValue(null)
      this.alergias.setValue(null)
      this.funcioensService.presentActinSheetCorrecto('Paciente Argegado');
      window.location.reload()
      })
      
    }else{
      this.funcioensService.presentActinSheetIncorrecto("Completa Los Campos");
      console.log(this.paciente);
    }

    
  }catch(error){
    this.funcioensService.presentActinSheetIncorrecto('Paciente no Registrado ')
   
  }

  }  



  cambiarSigno(event){
    this.paciente.Zodiaco= event.detail.value;
  }

  cambioSexo(event){
    console.log(event.detail.value);
    this.paciente.SexoPaciente = event.detail.value
  }
//usar para envair a api
  fechaStrring(date):string{
   let fecha = date
    //console.log(fecha);
    let newFecha= fecha.substring(8,10)+'-'+fecha.substring(5,7)+'-'+fecha.substring(0,4)
    return newFecha
  }
//usar para enviar a campo datetime
  transformarFechaPaciente(fecha){
    this.paciente.Fecha_NacimientoPaciente = fecha
     let newFecha = fecha.substring(6,10)+'-'+fecha.substring(3,5)+'-'+fecha.substring(0,2)
    // console.log(newFecha);
   }

   atras(){
     this.navController.navigateForward('/home-fast')
   }
}
interface ApiPaciente{
  AlergiasPaciente: string
  ApellidoPaciente: string
  CedulaPaciente: string
  "Datos del doctor": true
  "Datos del paciente": true
  EmailPaciente: string
  Fecha_NacimientoPaciente: string
  Foto: string
  Nombre: string
  NombrePaciente: string
  Sexo: string
  SexoPaciente: string
  Tipo_SangrePaciente: string
  Zodiaco: string
  doctor: number
  idPaciente: number
}




