package org.vendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.vendas.model.Cliente;
import org.vendas.repositories.ClienteRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente save(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente getId(Integer id){
        return clienteRepository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Não encontrado"));

    }

    public Cliente delete(Integer id) {
        return clienteRepository.findById(id).map(existe ->{
            clienteRepository.deleteById(existe.getId());
            return existe;
        }).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Não encontrado"));
    }

    public Cliente atualizar(Integer id, Cliente cliente) {
        return clienteRepository.findById(id).map(existe ->{
            cliente.setId(existe.getId());
            cliente.setDataCadastro(LocalDate.now());
            clienteRepository.save(cliente);
            return existe;
        }).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Não encontrado"));
    }

    public List<Cliente> listaTodos() {
        return clienteRepository.findAll();
    }
}
