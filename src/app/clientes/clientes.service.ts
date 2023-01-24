import { Injectable } from '@angular/core';
import { Cliente } from './clientes';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url:string = "localhost:8080/clientes"
  constructor(private http:HttpClient) { }

  getCliente():Cliente{
    let cliente:Cliente = new Cliente();
    cliente.nome = "fulano";
    cliente.cpf="12658484";
    return cliente;
  }

  salvar(cliente:Cliente):Observable<Cliente>{
    this.http.post<Cliente>(this.url, cliente);
    return this.http.get<Cliente>(this.url);
  }

}
