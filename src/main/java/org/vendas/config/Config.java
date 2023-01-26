package org.vendas.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.vendas.model.Cliente;
import org.vendas.repositories.ClienteRepository;
import org.vendas.repositories.ServicoRepository;

import javax.xml.crypto.Data;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;
@Configuration
public class Config implements CommandLineRunner {
    @Autowired
    ClienteRepository clienteRepository;
    @Autowired
    ServicoRepository servicoRepository;
    @Override
    public void run(String... args) throws Exception {
        Cliente cliente = new Cliente(null,"Rudge", "25407486008");
        Cliente cliente1 = new Cliente(null,"ff", "25407486008");
        Cliente cliente2 = new Cliente(null,"zz", "25407486008");
        Cliente cliente3 = new Cliente(null,"ss", "25407486008");
        Cliente cliente4 = new Cliente(null,"de", "25407486008");
        Cliente cliente5 = new Cliente(null,"3e", "25407486008");
        Cliente cliente6 = new Cliente(null,"Rq", "25407486008");
        clienteRepository.saveAll(Arrays.asList(cliente,cliente1,cliente2,cliente3,cliente4,cliente5,cliente6));

    }
}
