package org.vendas.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.vendas.model.Cliente;
import org.vendas.repositories.ClienteRepository;
import org.vendas.repositories.ServicoRepository;

import javax.xml.crypto.Data;
import java.time.LocalDate;
import java.util.Date;

public class Config implements CommandLineRunner {
    @Autowired
    ClienteRepository clienteRepository;
    @Autowired
    ServicoRepository servicoRepository;
    @Override
    public void run(String... args) throws Exception {
        Cliente cliente = new Cliente(null,"Rudge", "123456789");
        clienteRepository.save(cliente);

    }
}
