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
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  getClienteById(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  atualizarCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`,cliente);
  }

  deletarcliente(cliente:Cliente):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.url}/${cliente.id}`);
  }
}
