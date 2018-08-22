import React, { Component } from 'react';
import PatientCard from './patient-card';

class PatientsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: [
        {name: 'John Doe'}, {name: 'Marissa Jones'}, {name: 'James Woods'}
      ]
    };
  }
  render () {

    return (
      <div>
        <h1>This is the patients list</h1>

      </div>
    );
  }
}

export default PatientsList;
