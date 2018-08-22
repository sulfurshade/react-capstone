import React, { Component } from 'react';
import ConditionCard from './condition-card';

class ConditionsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conditions: [
        { name: 'Kidney Infection', icon: 'icon here', desc: 'An infection of the Kidney', length: '11-17-2017'}
      ]
    };
  }
  render () {

    return (
      <div>
        <h1>This is the conditions list</h1>

      </div>
    );
  }
}

export default ConditionsList;
