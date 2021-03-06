import React, { Component } from 'react';
import AppointmentCard from './appointment-card';
import Calendar from 'react-calendar';

class AppointmentsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appointments: [],
      date: new Date()
    };
    this.renderAppointmentsForDay = this.renderAppointmentsForDay.bind(this);
  }
  componentDidMount () {
    const token = localStorage.getItem("token");
    console.log('called from appointment component did mount');
    fetch('http://localhost:8080/appointments', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(rawResponse => {
      return rawResponse.json();
    })
    .then(response => {
      console.log('Here are the appointments:', response);
      this.setState({ appointments: response });
    })
    .catch(err => console.error('Invalid credentials', err));
  }

  renderAppointmentsForDay = date => {
    console.log('selected day', date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateStr = `${year}-${month}-${day}`;
    console.log(dateStr);
    //http://localhost:8080/appointments?date=2018-09-04
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8080/appointments?date=${dateStr}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(rawResponse => {
      console.log("raw response:", rawResponse);
      return rawResponse.json();
    })
    .then(response => {
      console.log('Here are the appointments:', response);
      this.setState({ appointments: response });
    })
    .catch(err => console.error('Invalid credentials', err));
  }

  onChange = date => this.setState({ date })

  render () {
    console.log('called from appointment render');
    console.log(this.state.appointments);
    if (this.state.appointments && this.state.appointments.constructor == Array) {
      let appointmentCards = this.state.appointments.map((appointment, i) => {
        return (
          <div className="appointment-cards" key={i}>
            <AppointmentCard date={ appointment.date } patient={ appointment.patient } doctor={ appointment.doctor } reason={ appointment.reason }></AppointmentCard>
          </div>
        )
      });
      return (
        <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          minDetail="month"
          onClickDay={this.renderAppointmentsForDay}
          className="appointment-calendar"
        />
          {appointmentCards}

        </div>
      );
    } else {
      return (
        <div>
          No Appointments
        </div>
      )
    }

  }
}

export default AppointmentsList;
