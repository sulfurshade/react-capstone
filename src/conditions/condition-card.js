import React, { Component } from 'react';

class ConditionCard extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <p>{ this.props.description }</p>
        <p>{ this.props.urgency }</p>
        <p>{ this.props.date }</p>
      </div>
    );
  }
}

export default ConditionCard;
