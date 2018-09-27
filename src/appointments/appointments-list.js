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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNThlNDRlMDc3ZjhiNDhmY2M1OTczOCIsIm5hbWUiOiJEciBkb2N0b3IiLCJudW1iZXIiOiIxMjM1NjU1NDU0IiwicHJhY3RpY2UiOiJkb2N0b3IiLCJ1c2VybmFtZSI6ImRvY3RvcnVzZXJuYW1lIiwicGFzc3dvcmQiOiJkb2N0b3JwYXNzd29yZCIsImVtYWlsIjoiZG9jdG9yQGdtYWlsLmNvbSIsImlhdCI6MTUzNDk1NTk0MX0.2z0Oni7QhJ4CUg6JvuNBel7icI0ZNAQ5kMeCH7Uw-rc';
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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNThlNDRlMDc3ZjhiNDhmY2M1OTczOCIsIm5hbWUiOiJEciBkb2N0b3IiLCJudW1iZXIiOiIxMjM1NjU1NDU0IiwicHJhY3RpY2UiOiJkb2N0b3IiLCJ1c2VybmFtZSI6ImRvY3RvcnVzZXJuYW1lIiwicGFzc3dvcmQiOiJkb2N0b3JwYXNzd29yZCIsImVtYWlsIjoiZG9jdG9yQGdtYWlsLmNvbSIsImlhdCI6MTUzNDk1NTk0MX0.2z0Oni7QhJ4CUg6JvuNBel7icI0ZNAQ5kMeCH7Uw-rc';
    fetch(`http://localhost:8080/appointments?date=${dateStr}`, {
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

  onChange = date => this.setState({ date })

  render () {
    let appointmentCards = this.state.appointments.map((appointment, i) => {
      return (
        <div className="appointment-cards" key={i}>
          <AppointmentCard date={ appointment.date } patient={ appointment.patient } doctor={ appointment.doctor } reason={ appointment.reason }></AppointmentCard>
        </div>
      )
    });
    console.log('called from appointment render');
    return (
      <div>
      <Calendar
        onChange={this.onChange}
        value={this.state.date}
        minDetail="month"
        onClickDay={this.renderAppointmentsForDay}
      />
        {appointmentCards}

      </div>
    );
  }
}

export default AppointmentsList;
