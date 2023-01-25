<<<<<<< HEAD
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
=======
>>>>>>> frontend
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {path:"clientes-form", component:ClientesFormComponent},
  {path:"clientes-lista",component:ClientesListaComponent}
=======
  {path:"clientes-form", component:ClientesFormComponent}
>>>>>>> frontend
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
