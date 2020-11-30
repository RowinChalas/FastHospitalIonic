import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
 
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
 
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'home-fast',
    loadChildren: () => import('./pages/home-fast/home-fast.module').then( m => m.HomeFastPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./pages/paciente/paciente.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'agregar-paciente',
    loadChildren: () => import('./pages/agregar-paciente/agregar-paciente.module').then( m => m.AgregarPacientePageModule)
  },
  {
    path: 'perfil-doctor',
    loadChildren: () => import('./pages/perfil-doctor/perfil-doctor.module').then( m => m.PerfilDoctorPageModule)
  },
  {
    path: 'modal-consultas',
    loadChildren: () => import('./pages/modal-consultas/modal-consultas.module').then( m => m.ModalConsultasPageModule)
  },
  {
    path: 'modal-editart-paciente',
    loadChildren: () => import('./pages/modal-editart-paciente/modal-editart-paciente.module').then( m => m.ModalEditartPacientePageModule)
  },
  {
    path: 'modal-consulta-crear',
    loadChildren: () => import('./pages/modal-consulta-crear/modal-consulta-crear.module').then( m => m.ModalConsultaCrearPageModule)
  },
  {
    path: 'sobre-fastapi',
    loadChildren: () => import('./pages/sobre-fastapi/sobre-fastapi.module').then( m => m.SobreFastapiPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
