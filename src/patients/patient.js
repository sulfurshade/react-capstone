import React, { Component } from 'react';
import PatientCard from './patient-card';
import ConditionCard from '../conditions/condition-card'

class Patient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patient: {
        name: 'John Doe', number: '336-123-4567', age: 22, gender: 'Male'
      },
      conditions: [
        {name: 'Allergies'}, {name: 'Flu'}
      ]
    };
  }
  render () {
    let conditions = this.state.conditions.map(condition => {
      return <ConditionCard name={condition.name}></ConditionCard>;
    });
    return (
      <div>
        <PatientCard name={ this.state.patient.name } number={ this.state.patient.number } age={ this.state.patient.age } gender={ this.state.patient.gender }></PatientCard>
        { conditions }
      </div>
    );
  }
}

export default Patient;
