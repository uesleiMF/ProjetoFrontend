import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [imagem, setImagem] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [status, setStatus] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [erro, setErro] = useState(null);

  // Função para pegar os produtos
  useEffect(() => {
    // Verificar se há dados salvos no localStorage
    const savedProdutos = localStorage.getItem('produtos');
    if (savedProdutos) {
      setProdutos(JSON.parse(savedProdutos)); // Carregar os produtos salvos
    } else {
      // Se não houver, pegar do backend
      axios
        .get('http://localhost:3001/produtos')
        .then((response) => {
          setProdutos(response.data); // Armazena todos os produtos no estado
          localStorage.setItem('produtos', JSON.stringify(response.data)); // Salva no localStorage
        })
        .catch((error) => {
          setErro('Erro ao carregar os produtos.');
          console.error(error);
        });
    }
  }, []);

  // Atualizar o localStorage sempre que os produtos mudarem
  useEffect(() => {
    if (produtos.length > 0) {
      localStorage.setItem('produtos', JSON.stringify(produtos));
    }
  }, [produtos]);

  // Função para tratar o upload de produtos
  const handleUploadProduto = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', imagem);
    formData.append('titulo', titulo);
    formData.append('descricao', descricao);
    formData.append('prioridade', prioridade);
    formData.append('status', status);
    formData.append('dataValidade', dataValidade);

    axios
      .post('http://localhost:3001/upload', formData)
      .then((response) => {
        alert('Produto cadastrado com sucesso!');
        const novoProduto = response.data.produto;
        setProdutos((prevProdutos) => {
          const novosProdutos = [...prevProdutos, novoProduto];
          localStorage.setItem('produtos', JSON.stringify(novosProdutos)); // Atualizar o localStorage
          return novosProdutos;
        });
      })
      .catch((error) => {
        setErro('Erro ao cadastrar produto.');
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      {erro && <p>{erro}</p>}

      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleUploadProduto}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Prioridade"
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="date"
          value={dataValidade}
          onChange={(e) => setDataValidade(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setImagem(e.target.files[0])}
          accept="image/*"
          required
        />
        <button type="submit">Cadastrar Produto</button>
      </form>

      <h2>Lista de Produtos</h2>
      <div>
        {produtos.length === 0 ? (
          <p>Nenhum produto cadastrado.</p>
        ) : (
          <ul>
            {produtos.map((produto) => (
              <li key={produto._id}>
                <h3>{produto.titulo}</h3>
                <p>{produto.descricao}</p>
                <img
                  src={`http://localhost:3001${produto.imagemUrl}`}
                  alt={produto.titulo}
                />
                <p>Prioridade: {produto.prioridade}</p>
                <p>Status: {produto.status}</p>
                <p>Data de validade: {produto.dataValidade}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
