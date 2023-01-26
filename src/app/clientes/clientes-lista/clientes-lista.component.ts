import { ClientesService } from './../clientes.service';
import { Cliente } from './../clientes';
import {Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  messageError:string;
  messageSuccess:string;
 
 /*Meu jeito de fazer
  posicao:number;
*/

  constructor(
    private clienteService: ClientesService, 
    private router:Router) {
    
     }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe({
      next:(clientes)=> this.clientes = clientes,
      error: (error) => console.log(error)
    });
  }

  novoCadastro(){
    this.router.navigate(['clientes-form']);
  }
//Na aula foi passado um routerlink, mas eu preferi passar uma função de router
  edit(id:number){
    this.router.navigate([`clientes-form/${id}`])
  }
//Jeito abordado no curso
preparaDelecao(cliente:Cliente){
  this.clienteSelecionado = cliente;

}


/*Meu jeito de fazer, foi refatorado
  preparaDelecao(cliente:Cliente,id:number){
    this.clienteSelecionado = cliente;
    this.posicao = id;

  }
  */

//Jeito feito no curso
  deletarCliente(cliente:Cliente){
    this.clienteService.deletarcliente(cliente).subscribe({
      next:()=>{
        this.messageSuccess = "Deletado com sucesso!";
        this.ngOnInit();
      },
      error:()=>{
        this.messageError = "Ocorreu um erro ao deletar o cliente."
      }
    });
  }

/*Meu jeito de fazer
  deletarCliente(cliente:Cliente){
    this.clienteService.deletarcliente(cliente).subscribe({
      next:()=>{
        this.messageSuccess = "Deletado com sucesso!";
        this.clientes.splice(this.posicao,1);
      },
      error:()=>{
        this.messageError = "Ocorreu um erro ao deletar o cliente."
      }
    });
  }
*/
}
