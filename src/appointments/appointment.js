import React, { Component } from 'react';
import AppointmentCard from './appointment-card';

class Appointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appointment: {
        date: '7:00pm 7/2/2018', patient: 'John Doe', doctor: 'Dr. Strange', reason: 'Check-up'
      }
    };
  }
  render () {
    return (
      <div>
        <AppointmentCard date={ this.state.appointment.date } patient={ this.state.appointment.patient } doctor={ this.state.appointment.doctor } reason={ this.state.appointment.reason }></AppointmentCard>
      </div>
    );
  }
}

export default Appointment;
