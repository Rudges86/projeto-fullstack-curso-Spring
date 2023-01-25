package org.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vendas.model.Servicos;

public interface ServicoRepository extends JpaRepository<Servicos,Integer> {
}
