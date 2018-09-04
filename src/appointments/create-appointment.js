import React from 'react';
import {reduxForm, Field} from 'redux-form';
import store from '../store';

export class CreateAppointment extends React.Component {
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
                <label htmlFor="date">Date</label>
                <Field name="date" id="date" type="date" component="input" />
                <label htmlFor="patient">Patient</label>
                <Field name="patient" id="patient" type="text" component="input" />
                <label htmlFor="doctor">Doctor</label>
                <Field name="doctor" id="doctor" type="text" component="input" />
                <label htmlFor="reason">Reason for visit</label>
                <Field name="reason" id="reason" type="text" component="input" />
                <button type="submit">Create</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'create appointment'
})(CreateAppointment);
