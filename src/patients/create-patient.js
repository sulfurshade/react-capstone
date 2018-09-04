import React from 'react';
import {reduxForm, Field} from 'redux-form';
import store from '../store';

export class CreatePatient extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleSubmit(e) {
      e.preventDefault();
        console.log(e);
    }
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <Field name="name" id="name" type="text" component="input" />
                <label htmlFor="number">Phone number</label>
                <Field name="number" id="number" type="text" component="input" />
                <label htmlFor="age">Age</label>
                <Field name="age" id="age" type="text" component="input" />
                <label htmlFor="gender">Gender</label>
                <Field name="gender" id="gender" type="text" component="input" />
                <label htmlFor="password">Password</label>
                <Field name="password" id="password" type="password" component="input" />
                <label htmlFor="username">Username</label>
                <Field name="username" id="username" type="text" component="input" />
                <button type="submit">Create</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'create patient'
})(CreatePatient);
