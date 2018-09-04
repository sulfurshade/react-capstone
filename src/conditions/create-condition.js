import React from 'react';
import {reduxForm, Field} from 'redux-form';
import store from '../store';

export class CreateCondition extends React.Component {
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
                <label htmlFor="description">Description</label>
                <Field name="description" id="description" type="textarea" component="input" />
                <label htmlFor="urgency">Urgency</label>
                <Field name="urgency" id="urgency" type="text" component="input" />
                <label htmlFor="date">Start Date</label>
                <Field name="date" id="date" type="date" component="input" />
                <button type="submit">Create</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'create condition'
})(CreateCondition);
