import React, { Component } from 'react';

class DoctorCard extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <p>{ this.props.number }</p>
        <p>{ this.props.practice }</p>
      </div>
    );
  }
}

export default DoctorCard;
