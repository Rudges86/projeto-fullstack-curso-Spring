import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from "../clientes";
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
<<<<<<< HEAD
  sucess:boolean = false;
  errors:string[]
=======

>>>>>>> frontend
  constructor(private clientesService:ClientesService) { 
    this.cliente = clientesService.getCliente();
  }

  ngOnInit(): void {
  }
  onSubmit() { 
<<<<<<< HEAD
    this.clientesService.salvar(this.cliente).subscribe({
      next:(response) => {
        this.sucess = true;
        this.errors = null;
        this.cliente = response
      },
      error:(erro)=> {
        this.errors = erro.error.errors;
        this.sucess = false;
      }
    });
=======
    this.clientesService.salvar(this.cliente).subscribe((x) =>  console.log(x))
>>>>>>> frontend
  }
}
