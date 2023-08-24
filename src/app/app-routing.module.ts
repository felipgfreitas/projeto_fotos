import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FotoComponent } from './foto/foto.component';
import { FotolistComponent } from './fotolist/fotolist.component';

const routes: Routes = [
  {path:'', component: FotolistComponent},
  {path:'form',component: FormularioComponent},
  {path:'foto',component: FotoComponent},
  {path:'fotolist',component: FotolistComponent},
  {path: 'cliente', component: ClienteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
