import React, { Component } from 'react';

class AppointmentCard extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.date }</h3>
        <p>{ this.props.patient }</p>
        <p>{ this.props.doctor }</p>
        <p>{ this.props.reason }</p>
      </div>
    );
  }
}

export default AppointmentCard;
