import React from 'react';
import {reduxForm, Field} from 'redux-form';
import store from '../store';

export class CreateDoctor extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(values) {
    var token = localStorage.getItem("token");
    return fetch('http://localhost:8080/doctors', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      console.log('Doctor was saved');
    });
    console.log("handling submission");
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
        <label htmlFor="name">Name</label>
        <Field name="name" id="name" type="text" component="input" />
        <label htmlFor="number">Phone number</label>
        <Field name="number" id="number" type="text" component="input" />
        <label htmlFor="practice">Field of practice</label>
        <Field name="practice" id="practice" type="text" component="input" />
        <label htmlFor="password">Password</label>
        <Field name="password" id="password" type="password" component="input" />
        <label htmlFor="email">Email address</label>
        <Field name="email" id="email" type="email" component="input" />
        <label htmlFor="username">Username</label>
        <Field name="username" id="username" type="text" component="input" />
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default reduxForm({
    form: 'create doctor'
})(CreateDoctor);
