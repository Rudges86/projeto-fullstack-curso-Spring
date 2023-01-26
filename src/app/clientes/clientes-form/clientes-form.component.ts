import { ActivatedRoute, Params, Router } from '@angular/router';
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
  sucess:boolean = false;
  errors:string[]
  id:number


  constructor(
    private clientesService:ClientesService,
    private router:Router,
    private activate:ActivatedRoute) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.activate.params.subscribe(
      (params:Params)=> {
        this.id = params['id'];
        if(this.id != undefined){
        this.clientesService.getClienteById(this.id)
        .subscribe({
          next: (x)=>{
          this.cliente = x;
          },
          error: (x) =>{
              this.cliente = new Cliente();
          }
        })
      }
      }
    )
    
  }
  onSubmit() { 
    if(this.id){
      console.log(this.cliente)
      this.clientesService.atualizarCliente(this.cliente)
      .subscribe({
        next:(x)=>{
          this.sucess = true;
          this.errors = null;
        },
        error:(error) =>{
          this.errors = ['Error ao atualizar']
          console.log(error)
        }
      });
    }else{
      this.clientesService.salvar(this.cliente).subscribe({
        next:(response) => {
          this.sucess = true;
          this.errors = null;
          this.cliente = response;
          this.router.navigate(['/clientes-lista'])
        },
        error:(erro)=> {
          this.errors = erro.error.errors;
          this.sucess = false;
        }
      });
    }

  }

  voltarListaClientes(){
    this.router.navigate(['/clientes-lista'])
  }
}
