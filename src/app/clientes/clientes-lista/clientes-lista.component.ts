import { ClientesService } from './../clientes.service';
import { Cliente } from './../clientes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

}
