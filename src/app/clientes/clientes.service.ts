import { Injectable } from '@angular/core';
import { Cliente } from './clientes';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url:string = "http://localhost:8080/clientes"
  constructor(private http:HttpClient) { }

  getCliente():Cliente{
    let cliente:Cliente = new Cliente();
    cliente.nome = "fulano";
    cliente.cpf="25407486008";
    return cliente;
  }

  salvar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente);    
  }

  /*getClientes():Observable<Cliente[]>{
    return null;
  }*/
  getClientes(): Cliente[]{
    let cliente = new Cliente;
    cliente.id = 1;
    cliente.nome = "fulano";
    cliente.dataCadastro = "18/04/2020";
    cliente.cpf="12345678910";
    return [cliente];
  }

}
