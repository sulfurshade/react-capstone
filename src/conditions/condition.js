import React, { Component } from 'react';
import ConditionCard from './condition-card';

class Condition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      condition: {
        name: 'Allergies', description: 'Inflamed nose', urgency: 'Severe', date: '7/1/2018'
      }
    };
  }
  render () {
    return (
      <div>
      <ConditionCard name={ this.state.condition.name } description={ this.state.condition.description } urgency={ this.state.condition.urgency } date={ this.state.condition.date }></ConditionCard>
      </div>
    );
  }
}

export default Condition;
