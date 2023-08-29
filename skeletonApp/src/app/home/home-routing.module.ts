import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PerfilComponent } from './perfil/perfil.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'asistencia',
        component: AsistenciaComponent
      },
      {
        path: 'perfil',
        component:PerfilComponent
      },
      {
        path: '',
        redirectTo: 'perfil',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
