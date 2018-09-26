import React, { Component } from 'react';
import DoctorCard from './doctor-card';

class DoctorsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doctors: []
    };
  }
  componentDidMount () {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNThlNDRlMDc3ZjhiNDhmY2M1OTczOCIsIm5hbWUiOiJEciBkb2N0b3IiLCJudW1iZXIiOiIxMjM1NjU1NDU0IiwicHJhY3RpY2UiOiJkb2N0b3IiLCJ1c2VybmFtZSI6ImRvY3RvcnVzZXJuYW1lIiwicGFzc3dvcmQiOiJkb2N0b3JwYXNzd29yZCIsImVtYWlsIjoiZG9jdG9yQGdtYWlsLmNvbSIsImlhdCI6MTUzNDk1NTk0MX0.2z0Oni7QhJ4CUg6JvuNBel7icI0ZNAQ5kMeCH7Uw-rc';
    console.log('called from doctor component did mount');
    fetch('http://localhost:8080/doctors', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(rawResponse => {
      return rawResponse.json();
    })
    .then(response => {
      console.log('Here are the doctors:', response);
      this.setState({ doctors: response });
    })
    .catch(err => console.error('Invalid credentials', err));
  }
  render () {
    let doctorCards = this.state.doctors.map(doctor => {
      return (
        <div key={ doctor.number } className="doctor-cards">
          <DoctorCard name={ doctor.name } number={ doctor.number } practice={ doctor.practice }></DoctorCard>
        </div>
      )
    });
    console.log('called from doctor render');
    return (
      <div>
        {doctorCards}

      </div>
    );
  }
}

export default DoctorsList;
