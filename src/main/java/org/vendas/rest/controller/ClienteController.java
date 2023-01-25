package org.vendas.rest.controller;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.vendas.model.Cliente;
import org.vendas.repositories.ClienteRepository;
import org.vendas.service.ClienteService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/clientes")

public class ClienteController {
    @Autowired
    private ClienteService clienteService;


    @PostMapping
    public ResponseEntity<Cliente> salvar(@RequestBody @Valid Cliente cliente){
        clienteService.save(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> pegarId(@PathVariable Integer id){
        Cliente cliente = clienteService.getId(id);
    return ResponseEntity.status(HttpStatus.OK).body(cliente);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        clienteService.delete(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> atualizar(@PathVariable Integer id, @RequestBody @Valid Cliente cliente){
        clienteService.atualizar(id,cliente);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> listaDeClientes(){
        List<Cliente> lista = clienteService.listaTodos();
        return ResponseEntity.status(HttpStatus.OK).body(lista);
    }
    //Al
}
