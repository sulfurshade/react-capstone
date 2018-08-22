import React, { Component } from 'react';

class PatientCard extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <p>{ this.props.number }</p>
        <p>{ this.props.age }</p>
        <p>{ this.props.gender }</p>
      </div>
    );
  }
}

export default PatientCard;
