import React, { Component } from 'react';
import {
  Button, TextField, Dialog, DialogActions,
  DialogTitle, DialogContent, TableBody, Table,
  TableContainer, TableHead, TableRow, TableCell,CircularProgress,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import swal from 'sweetalert';
const axios = require('axios');
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      token: false,
      openCasalModal: false,
      openCasalEditModal: false,
      id: '',
      name: '',
      desc: '',
      tel:'',
      niverH: '',
      niverM: '',
      file: '',
      fileName: '',
      page: 1,
      search: '',
      casais: [],
      pages: 0,
      loading: false
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    } else {
      this.setState({ token: token }, () => {
        this.getCasal();
      });
    }
  }

  getCasal = () => {
    
    this.setState({ loading: true });

    let data = '?';
    data = `${data}page=${this.state.page}`;
    if (this.state.search) {
      data = `${data}&search=${this.state.search}`;
    }
    axios.get(`https://projeto-backend-fg78.onrender.com/get-casal${data}`, {
      headers: {
        'token': this.state.token
      }
    }).then((res) => {
      this.setState({ loading: false, casais: res.data.casais, pages: res.data.pages });
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
      this.setState({ loading: false, casais: [], pages: 0 },()=>{});
    });
  }

  deleteCasal = (id) => {
    axios.post('https://projeto-backend-fg78.onrender.com/delete-casal', {
      id: id
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': this.state.token
      }
    }).then((res) => {

      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });

      this.setState({ page: 1 }, () => {
        this.pageChange(null, 1);
      });
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
    });
  }

  pageChange = (e, page) => {
    this.setState({ page: page }, () => {
      this.getCasal();
    });
  }

  logOut = () => {
    localStorage.setItem('token', null);
    this.props.history.push('/');
  }

  onChange = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].name) {
      this.setState({ fileName: e.target.files[0].name }, () => { });
    }
    this.setState({ [e.target.name]: e.target.value }, () => { });
    if (e.target.name === 'search') {
      this.setState({ page: 1 }, () => {
        this.getCasal();
      });
    }
  };

  addCasal = () => {
    const fileInput = document.querySelector("#fileInput");
    const file = new FormData();
    file.append('file', fileInput.files[0]);
    file.append('name', this.state.name);
    file.append('desc', this.state.desc);
    file.append('tel', this.state.tel);
    file.append('niverH', this.state.niverH);
    file.append('niverM', this.state.niverM);

    axios.post('https://projeto-backend-fg78.onrender.com/add-casal', file, {
      headers: {
        'content-type': 'multipart/form-data',
        'token': this.state.token
      }
    }).then((res) => {

      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });

      this.handleCasalClose();
      this.setState({ name: '', desc: '',  tel: '', niverH: '', niverM: '',  file: null, page: 1 }, () => {
        this.getCasal();
      });
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
      this.handleCasalClose();
    });

  }

  updateCasal = () => {
    const fileInput = document.querySelector("#fileInput");
    const file = new FormData();
    file.append('id', this.state.id);
    file.append('file', fileInput.files[0]);
    file.append('name', this.state.name);
    file.append('desc', this.state.desc);
    file.append('tel', this.state.tel);
    file.append('niverH', this.state.niverH);
    file.append('niverM', this.state.niverM);
   
   


    axios.post('https://projeto-backend-fg78.onrender.com/update-casal', file, {
      headers: {
        'content-type': 'multipart/form-data',
        'token': this.state.token
      }
    }).then((res) => {

      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });

      this.handleCasaltEditClose();
      this.setState({ name: '', desc: '',tel:'', niverH: '', niverM: '',  file: null }, () => {
        this.getCasal();
      });
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
      this.handleCasaltEditClose();
    });

  }

  handleCasalOpen = () => {
    this.setState({
      openCasalModal: true,
      id: '',
      name: '',
      desc: '',
      tel:'',
      niverH: '',
      niverM: '',
      fileName: ''
    });
  };

  handleCasalClose = () => {
    this.setState({ openCasalModal: false });
  };

  handleCasalEditOpen = (data) => {
    this.setState({
      openCasalEditModal: true,
      id: data._id,
      name: data.name,
      desc: data.desc,
      tel: data.tel,
      niverH: data.niverH,
      niverM: data.niverM,
     
      fileName: data.image
    });
  };

  handleCasaltEditClose = () => {
    this.setState({ openCasalEditModal: false });
  };

  render() {
    return (
      <div>
        {this.state.loading && <CircularProgress color="inherit" />}
        <div>
          <h2>CELULAS DE  CASAIS</h2>
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            onClick={this.handleCasalOpen}
          >
            Adicionar Casais
          </Button>
          <Button
            className="button_style"
            variant="contained"
            size="small"
            onClick={this.logOut}
          >
            Sair
          </Button>
        </div>

        {/* Edit Casais */}
        <Dialog
          open={this.state.openCasalEditModal}
          onClose={this.handleCasalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Editar Casais</DialogTitle>
          <DialogContent>
            <TextField
              id="standard-basic"
              type="text"
              autoComplete="off"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Nome Casal"
              required
            /><br />
            <TextField
              id="standard-basic"
              type="text"
              autoComplete="off"
              name="desc"
              value={this.state.desc}
              onChange={this.onChange}
              placeholder="Descrição"
              required
            /><br />
              <TextField
              id="standard-basic"
              type="number"
              autoComplete="off"
              name="tel"
              value={this.state.tel}
              onChange={this.onChange}
              placeholder="Contato"
              required
            /><br />
            <TextField
              id="standard-basic"
              type="date"
              dateformat="MM/DD/YYYY"
              autoComplete="off"
              name="niverH"
              value={this.state.niverH}
              onChange={this.onChange}
              placeholder="Aniversario Homem"
              required
            /><br />
            <TextField
              id="standard-basic"
              type="date"
              dateformat="MM/DD/YYYY"
              autoComplete="off"
              name="niverM"
              value={this.state.niverM}
              onChange={this.onChange}
              placeholder="Aniversario Mulher"
              required
            /><br /><br />
            <Button
              variant="contained"
              component="label"
            > Upload
            <input
                idd="standard-basic"
                type="file"
                accept="image/*"
                name="file"
                value={this.state.file}
                onChange={this.onChange}
                id="fileInput"
                placeholder="File"
                hidden
              />
            </Button>&nbsp;
            {this.state.fileName}
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleCasaltEditClose} color="primary">
              Cancelar
            </Button>
            <Button
              disabled={this.state.name === '' || this.state.desc === '' || this.state.tel===''|| this.state.niverH === '' || this.state.niverM === '' }
              onClick={(e) => this.updateCasal()} color="primary" autoFocus>
              Editar Casais
            </Button>
          </DialogActions>
        </Dialog>

        {/* Add Casais */}
        <Dialog
          open={this.state.openCasalModal}
          onClose={this.handleCasalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Adicionar Casais</DialogTitle>
          <DialogContent>
            <TextField
              id="standard-basic"
              type="text"
              autoComplete="off"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Nome Casais"
              required
            /><br />
            <TextField
              id="standard-basic"
              type="text"
              autoComplete="off"
              name="desc"
              value={this.state.desc}
              onChange={this.onChange}
              placeholder="Descrição"
              required
            /><br />
              <TextField
              id="standard-basic"
              type="number"
              autoComplete="off"
              name="tel"
              value={this.state.tel}
              onChange={this.onChange}
              placeholder="Contato"
              required
            /><br />

            <TextField
              id="standard-basic"
              type="date"
              dateformat="MM/DD/YYYY"
              autoComplete="off"
              name="niverH"
              value={this.state.niverH}
              onChange={this.onChange}
              placeholder="Anirvesario Homem"
              required
            /><br />
            <TextField
              id="standard-basic"
              type="date"
              dateformat="MM/DD/YYYY"
              autoComplete="off"
              name="niverM"
              value={this.state.niverM}
              onChange={this.onChange}
              placeholder="Aniversario Mulher"
              required
            /><br /><br />
            <Button
              variant="contained"
              component="label"
            > Upload
            <input
                idd="standard-basic"
                type="file"
                accept="image/*"
                name="file"
                value={this.state.file}
                onChange={this.onChange}
                id="fileInput"
                placeholder="File"
                hidden
                required
              />
            </Button>&nbsp;
            {this.state.fileName}
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleCasalClose} color="primary">
              Cancelar
            </Button>
            <Button
              disabled={this.state.name === '' || this.state.desc === ''|| this.state.tel==='' || this.state.H === '' || this.state.niverM === ''|| this.state.file === null}
              onClick={(e) => this.addCasal()} color="primary" autoFocus>
              Adicionar Casais
            </Button>
          </DialogActions>
        </Dialog>

        <br />

        <TableContainer>
          <TextField
            id="standard-basic"
            type="search"
            autoComplete="off"
            name="search"
            value={this.state.search}
            onChange={this.onChange}
            placeholder="Procurar Casais"
            required
          /> 
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
              
                <TableCell align="center">Imagem</TableCell>
                <TableCell align="center">Nome Casal</TableCell>
                <TableCell align="center">Descrição</TableCell>
                <TableCell align="center">Contato</TableCell>
                <TableCell align="center">Aniversario Homem</TableCell>
                <TableCell align="center">Aniversario Mulher</TableCell>
                <TableCell align="center">Ação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.casais.map((row) => (
                <TableRow key={row.name}>
              
      
                 
                  <TableCell align="center"><img src={`https://projeto-backend-fg78.onrender.com/${row.image}`} alt="" width="70" height="70" /></TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.desc}</TableCell>
                  <TableCell align="center">{row.tel}</TableCell>
                  <TableCell align="center">{row.niverH}</TableCell>
                  <TableCell align="center">{row.niverM}</TableCell>
               
                  <TableCell align="center">
                    <Button
                      className="button_style"
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={(e) => this.handleCasalEditOpen(row)}
                    >
                      Editar
                  </Button>
                    <Button
                      className="button_style"
                      variant="outlined"
                      color="secondary"
                      size="small"
                      
                      
                      onClick={(e) => this.deleteCasal(row._id)}
                    >
                      Deletar
                  </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <br />
          <Pagination count={this.state.pages} page={this.state.page} onChange={this.pageChange} color="primary" />
        </TableContainer>

      </div>
    );
  }
}
