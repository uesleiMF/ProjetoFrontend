import React, { useState } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import axios from 'axios';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  const login = () => {
    axios.post('http://localhost:2000/login', {
      username,
      password,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      history.push('/dashboard');
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    });
  };

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
          value={username}
          onChange={onChange}
          placeholder="User Name"
          required
        />
        <br /><br />
        <TextField
          id="standard-basic"
          type="password"
          autoComplete="off"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <br /><br />
        <Button
          className="button_style"
          variant="contained"
          color="primary"
          size="small"
          disabled={username === '' || password === ''}
          onClick={login}
        >
          Login
        </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
