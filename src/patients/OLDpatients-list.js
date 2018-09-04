import React, { Component } from 'react';
import PatientCard from './patient-card';

class PatientsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: []
    };
  }
  componentDidMount () {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNThlNDRlMDc3ZjhiNDhmY2M1OTczOCIsIm5hbWUiOiJEciBkb2N0b3IiLCJudW1iZXIiOiIxMjM1NjU1NDU0IiwicHJhY3RpY2UiOiJkb2N0b3IiLCJ1c2VybmFtZSI6ImRvY3RvcnVzZXJuYW1lIiwicGFzc3dvcmQiOiJkb2N0b3JwYXNzd29yZCIsImVtYWlsIjoiZG9jdG9yQGdtYWlsLmNvbSIsImlhdCI6MTUzNDk1NTk0MX0.2z0Oni7QhJ4CUg6JvuNBel7icI0ZNAQ5kMeCH7Uw-rc';
    console.log('called from patient component did mount');
    fetch('http://localhost:8080/patients', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(rawResponse => {
      return rawResponse.json();
    })
    .then(response => {
      console.log('Here are the patients:', response);
      this.setState({ patients: response });
    })
    .catch(err => console.error('Invalid credentials', err));
  }
  render () {
    let patientCards = this.state.patients.map(patient => {
      return (
        <div>
          <PatientCard name={ patient.name } number={ patient.number } age={ patient.age } gender={ patient.gender }></PatientCard>
        </div>
      )
    });
    console.log('called from patient render');
    return (
      <div>
        {patientCards}

      </div>
    );
  }
}

export default PatientsList;
