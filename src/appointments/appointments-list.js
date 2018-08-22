import React, { Component } from 'react';
import AppointmentCard from './appointment-card';

class AppointmentsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appointments: [
        { date: '11-21-2017', patient: 'James Woods', doctor: 'Dr Bob', reason: 'Kidney Infection'}
      ]
    };
  }
  render () {

    return (
      <div>
        <h1>This is the appointments list</h1>

      </div>
    );
  }
}

export default AppointmentsList;
