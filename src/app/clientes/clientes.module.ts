import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
=======
>>>>>>> frontend


@NgModule({
  declarations: [
<<<<<<< HEAD
    ClientesFormComponent,
    ClientesListaComponent
=======
    ClientesFormComponent
>>>>>>> frontend
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
    
  ],
  exports:[
<<<<<<< HEAD
    ClientesFormComponent,
    ClientesListaComponent
=======
    ClientesFormComponent
>>>>>>> frontend
  ]
})
export class ClientesModule { }
