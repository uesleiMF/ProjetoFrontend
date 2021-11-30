import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Api from '../../api/api';

const View = () => {
  // inicializa o estado musica para poder fazer as alteracoes do dom.
  const [produto, setProduto] = useState({});
  // crio o estado de abertura do modal;
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // funcoes de abertura e fechamento do modal
  const AbreModal = () => setOpen(true);
  const FechaModal = () => setOpen(false);

  // chama o use effect sem parametro de dependencia (executa uma vez ao renderizar o componente)
  // chamando a funcao getMusicaById
  useEffect(() => {
    getProdutoById();
  }, [])

  // acessa o id no parametro da url;
  const { id } = useParams();
  console.log(id);

  // faz a chamada para a api passando o id como parametro para buscar o objeto da musica (invidual por id)
  const getProdutoById = async () => {
    const request = await Api.fetchGetById(id);
    const produto = await request.json();
    setProduto(produto);
  }

  const handleDelete = async() => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    if(data.message) {
      console.log('excluido', data.message);
      navigate('/');
    }else {
      alert(data.error);
    }
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-6">
          <img src={produto.capa} className="w-100" alt={produto.titulo}/>
        </div>
        <div className="col-6">
          <div className="card my-10 bg-light">
            <h1 className="text-center my-2"><b>Titulo: </b>{produto.titulo}</h1>
            <h3 className="text-center text-success "><b>Descrição: </b>{produto.descricao}</h3>
            <h4 className="text-center text-danger"><b>Prioridade: </b> {produto.prioridade}</h4>
            <h5 className="text-center text-primary"><b>Status: </b>{produto.status}</h5>
            <h5 className="text-center text-warning"><b>Prazo: </b>{produto.prazo}</h5>
            <h6 className="text-center text-secondary"><b>Data de Criação: </b>{produto.dataCriacao}</h6>
            <div className="btn-group mt-3 w-100">
              <Link to={`/edit/${produto._id}`} className="btn btn-info">Editar</Link>
              <button className="btn btn-danger" onClick={AbreModal}> Excluir</button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <h2 className="my-4">Deseja Realmente Excluir ?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={FechaModal}>Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
  )
}

export default View
