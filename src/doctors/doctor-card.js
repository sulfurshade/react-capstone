import React, { Component } from 'react';

class DoctorCard extends Component {
  render() {
    return (
      <div className="doctor-card">
        <h3>
          <i class="fa fa-user-md" aria-hidden="true"></i>
          { this.props.name }
        </h3>
        <p>
          <i class="fa fa-phone-square" aria-hidden="true"></i>
          { this.props.number }
        </p>
        <p>
          <i class="fa fa-stethoscope" aria-hidden="true"></i>
          { this.props.practice }
        </p>
      </div>
    );
  }
}

export default DoctorCard;
