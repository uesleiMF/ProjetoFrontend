import React, { useState, useEffect } from 'react';

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado ainda.</p>
      ) : (
        <ul>
          {produtos.map((produto, index) => (
            <li key={index}>
              <h3>{produto.titulo}</h3>
              <p>{produto.descricao}</p>
              <p>Prioridade: {produto.prioridade}</p>
              <p>Status: {produto.status}</p>
              <p>Data de Validade: {produto.dataValidade}</p>
              <img
                src={`http://localhost:3001${produto.imagemUrl}`}
                alt={produto.titulo}
                width="100"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaProdutos;
