import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

// Componente de input reutilizável
const InputField = ({ id, label, value, onChange, type = 'text', placeholder, name }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

// Componente de mensagem de erro
const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <div className="alert alert-danger">
      {message}
    </div>
  );
};

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
  const [formErrors, setFormErrors] = useState({});

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

  const validateForm = () => {
    const errors = {};
    if (!produto.titulo) errors.titulo = "O título é obrigatório";
    if (!produto.descricao) errors.descricao = "A descrição é obrigatória";
    if (!produto.prioridade) errors.prioridade = "A prioridade é obrigatória";
    if (!produto.prazo) errors.prazo = "A validade do produto é obrigatória";
    if (!produto.data) errors.data = "A data de cadastro é obrigatória";

    return errors;
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const request = await Api.fetchPut(produto, id);
      const data = await request.json();
      if (data.error) {
        alert(data.error);
        return;
      }
      alert(data.message);
      navigate(`/view/${id}`);
    } catch (error) {
      alert("Erro ao enviar os dados");
      console.error(error);
    }
  };

  if (loading) return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );

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
          {error && <ErrorMessage message={error} />}
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <InputField
                  id="titulo"
                  label="Titulo"
                  value={produto.titulo}
                  onChange={handleFieldsChange}
                  name="titulo"
                />
                {formErrors.titulo && <div className="text-danger">{formErrors.titulo}</div>}
              </div>
              <div className="col-4">
                <InputField
                  id="descricao"
                  label="Descrição do produto"
                  value={produto.descricao}
                  onChange={handleFieldsChange}
                  name="descricao"
                />
                {formErrors.descricao && <div className="text-danger">{formErrors.descricao}</div>}
              </div>
              <div className="col-4">
                <InputField
                  id="prioridade"
                  label="Prioridade do Produto"
                  value={produto.prioridade}
                  onChange={handleFieldsChange}
                  name="prioridade"
                  placeholder="ruim, bom, ótimo"
                />
                {formErrors.prioridade && <div className="text-danger">{formErrors.prioridade}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <InputField
                  id="capa"
                  label="Link do Produto"
                  value={produto.capa}
                  onChange={handleFieldsChange}
                  name="capa"
                />
              </div>
              <div className="col-4">
                <InputField
                  id="prazo"
                  label="Validade do produto"
                  value={produto.prazo}
                  onChange={handleFieldsChange}
                  name="prazo"
                  type="date"
                />
                {formErrors.prazo && <div className="text-danger">{formErrors.prazo}</div>}
              </div>
              <div className="col-4">
                <InputField
                  id="data"
                  label="Data de Cadastro"
                  value={produto.data}
                  onChange={handleFieldsChange}
                  name="data"
                  type="date"
                />
                {formErrors.data && <div className="text-danger">{formErrors.data}</div>}
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
