package org.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vendas.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente,Integer> {


}
