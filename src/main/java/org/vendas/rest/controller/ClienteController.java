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
//@CrossOrigin(origins = "*",maxAge = 3600) o que normalmente uso, libera todos os acessos,
//O que foi usado no curso @CrossOrigin("http://localhost:4200") liberando somente o acesso do 4200,
//mas eu usei uma classe de configuração para o cors chamada webConfig
public class ClienteController {
    @Autowired
    private ClienteService clienteService;


    @PostMapping
    public ResponseEntity<Cliente> salvar(@RequestBody @Valid Cliente cliente){
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteService.save(cliente));
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
}
