import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`https://projeto-backend-fg78.onrender.com/produtos/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchProduto();
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="container">
      <h1>{produto.titulo}</h1>
      <p>{produto.descricao}</p>
      <p>Prioridade: {produto.prioridade}</p>
      <p>Status: {produto.status}</p>
      <p>Data de Validade: {produto.dataValidade}</p>
      {produto.imagemUrl && (
        <img src={`https://projeto-backend-fg78.onrender.com${produto.imagemUrl}`} alt={produto.titulo} width="200" />
      )}
    </div>
  );
};

export default View;
