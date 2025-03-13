import React, { useState } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import axios from 'axios';

const Register = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirm_password') setConfirmPassword(value);
  };

  const register = () => {
    if (password !== confirmPassword) {
      swal({
        text: "Passwords do not match!",
        icon: "error",
        type: "error"
      });
      return;
    }

    axios.post('https://projeto-backend-fg78.onrender.com/register', {
      username,
      password,
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      history.push('/');
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
    });
  };

  return (
    <div style={{ marginTop: '200px' }}>
      <div>
        <h2>Register</h2>
      </div>

      <div>
        <TextField
          id="username"
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
          id="password"
          type="password"
          autoComplete="off"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <br /><br />
        <TextField
          id="confirm_password"
          type="password"
          autoComplete="off"
          name="confirm_password"
          value={confirmPassword}
          onChange={onChange}
          placeholder="Confirm Password"
          required
        />
        <br /><br />
        <Button
          className="button_style"
          variant="contained"
          color="primary"
          size="small"
          disabled={username === '' || password === '' || confirmPassword === '' || password !== confirmPassword}
          onClick={register}
        >
          Register
        </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
