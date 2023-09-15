import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'certificaciones',
        component: CertificacionesComponent
      },
      {
        path:'experiencias',
        component: ExperienciaLaboralComponent
      },
      {
        path: 'mis-datos',
        component: MisDatosComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
