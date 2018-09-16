import React from 'react';
import {reduxForm, Field } from 'redux-form';
import store from './store';
import './App.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(values) {
    return fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log('Login was successful');
      const {token} = res;
      localStorage.setItem('token', token);
    })
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
          <label htmlFor="username">Username</label>
          <Field name="username" id="username" type="text" component="input" />
          <label htmlFor="password">Password</label>
          <Field name="password" id="password" type="password" component="input" />
          <div className="actions"><button type="submit">Login</button></div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login'
})(Login);
