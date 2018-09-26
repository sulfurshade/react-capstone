import React, { Component } from 'react';
import ConditionCard from './condition-card';

class ConditionsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conditions: []
    };
  }
  componentDidMount () {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNThlNDRlMDc3ZjhiNDhmY2M1OTczOCIsIm5hbWUiOiJEciBkb2N0b3IiLCJudW1iZXIiOiIxMjM1NjU1NDU0IiwicHJhY3RpY2UiOiJkb2N0b3IiLCJ1c2VybmFtZSI6ImRvY3RvcnVzZXJuYW1lIiwicGFzc3dvcmQiOiJkb2N0b3JwYXNzd29yZCIsImVtYWlsIjoiZG9jdG9yQGdtYWlsLmNvbSIsImlhdCI6MTUzNDk1NTk0MX0.2z0Oni7QhJ4CUg6JvuNBel7icI0ZNAQ5kMeCH7Uw-rc';
    console.log('called from condition component did mount');
    fetch('http://localhost:8080/conditions', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(rawResponse => {
      return rawResponse.json();
    })
    .then(response => {
      console.log('Here are the conditions:', response);
      this.setState({ conditions: response });
    })
    .catch(err => console.error('Invalid credentials', err));
  }
  render () {
    let conditionCards = this.state.conditions.map(condition => {
      return (
        <div key={ condition.id }>
          <ConditionCard name={ condition.name } description={ condition.description } urgency={ condition.urgency } date={ condition.date }></ConditionCard>
        </div>
      )
    });
    console.log('called from condition render');
    return (
      <div>
        {conditionCards}

      </div>
    );
  }
}

export default ConditionsList;
