import React, { Component } from 'react';
import DoctorCard from './doctor-card';

class Doctor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doctor: {
        name: 'Dr. Strange', number: '336-037-9735', practice: 'Vet'
      }
    };
  }
  render () {
    return (
      <div>
        <DoctorCard name={ this.state.doctor.name } number={ this.state.doctor.number } practice={ this.state.doctor.practice }></DoctorCard>
      </div>
    );
  }
}

export default Doctor;
