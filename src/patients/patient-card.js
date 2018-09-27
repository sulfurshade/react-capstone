import React, { Component } from 'react';

class PatientCard extends Component {
  render() {
    return (
      <div>
        <span className="title-text">Name: </span><p>{ this.props.name }</p>
        <span className="title-text">Number: </span><p>{ this.props.number }</p>
        <span className="title-text">Age: </span><p>{ this.props.age }</p>
        <span className="title-text">Gender: </span><p>{ this.props.gender }</p>
      </div>
    );
  }
}

export default PatientCard;
