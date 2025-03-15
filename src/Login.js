import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
const axios = require('axios');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    // Enviar a senha original sem criptografá-la
    axios.post('https://projeto-backend-fg78.onrender.com/login', {
      username: this.state.username,
      password: this.state.password, // Enviar a senha sem hash
    }).then((res) => {
      // Armazenar o token no localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);

      // Agora, configurar o token para ser enviado em todas as requisições subsequentes
      axios.defaults.headers['Authorization'] = `Bearer ${res.data.token}`;

      // Redirecionar para o dashboard após login
      this.props.history.push('/dashboard');
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    });
  }

  // Este método é para garantir que o token esteja presente nas futuras requisições
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  render() {
    return (
      <div style={{ marginTop: '200px' }}>
        <div>
          <h2>Login</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="Usuario"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Senha"
            required
          />
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username === '' || this.state.password === ''}
            onClick={this.login}
          >
            Login
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/register">
            Registro
          </Link>
        </div>
      </div>
    );
  }
}
