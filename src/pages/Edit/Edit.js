import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    titulo: '',
    descricao: '',
    prioridade: '',
    status: '',
    capa: '',
    data: '',
    prazo: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getProdutoById();
  }, [id]);

  const getProdutoById = async () => {
    try {
      const request = await Api.fetchGetById(id);
      if (!request.ok) throw new Error('Produto não encontrado');
      const produto = await request.json();
      setProduto(produto);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFieldsChange = (evento) => {
    const produtoEdit = { ...produto };
    produtoEdit[evento.target.name] = evento.target.value;
    setProduto(produtoEdit);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    // Validação simples
    if (!produto.titulo || !produto.descricao || !produto.prioridade || !produto.prazo || !produto.data) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    try {
      const request = await Api.fetchPut(produto, id);
      const data = await request.json();
      if (data.error) {
        alert(data.error); // Exibe o erro específico da API
        return;
      }
      alert(data.message);
      navigate(`/view/${id}`);
    } catch (error) {
      alert("Erro ao enviar os dados");
      console.error(error);
    }
  };

  if (loading) return <div>Carregando...</div>;

  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Edição do Produto</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Titulo:</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    placeholder="Nome do Produto"
                    value={produto.titulo}
                    onChange={handleFieldsChange}
                    name="titulo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição do produto:</label>
                  <input
                    id="descricao"
                    type="text"
                    className="form-control"
                    placeholder="Descrição do Produto"
                    value={produto.descricao}
                    onChange={handleFieldsChange}
                    name="descricao"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade do Produto:</label>
                  <input
                    id="prioridade"
                    type="text"
                    className="form-control"
                    value={produto.prioridade}
                    onChange={handleFieldsChange}
                    placeholder="ruim bom otimo"
                    name="prioridade"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="capa">Link do Produto:</label>
                  <input
                    id="capa"
                    type="text"
                    value={produto.capa}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="URL da Produto"
                    name="capa"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Validade do produto:</label>
                  <input
                    id="prazo"
                    type="date"
                    value={produto.prazo}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Validade"
                    name="prazo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="data">Data de Cadastro:</label>
                  <input
                    id="data"
                    type="date"
                    value={produto.data}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Data de Cadastro"
                    name="data"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
