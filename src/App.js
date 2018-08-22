import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Patient from './patients/patient';
import PatientsList from './patients/patients-list';
import Doctor from './doctors/doctor';
import DoctorsList from './doctors/render-doctors';
import Appointment from './appointments/appointment';
import AppointmentsList from './appointments/appointments-list';
import Condition from './conditions/condition';
import ConditionsList from './conditions/conditions-list';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Capstone</h1>
            <ul>
              <li><Link to="/patients">Patients</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/appointments">Appointments</Link></li>
              <li><Link to="/conditions">Conditions</Link></li>
            </ul>
          </header>
          <p className="App-intro">
            <br/>
          </p>

          <Switch>
            <Route path="/patients" exact component={PatientsList}/>
            <Route path="/patients/:id" component={Patient}/>
            <Route path="/doctors" exact component={DoctorsList}/>
            <Route path="/doctors/:id" component={Doctor}/>
            <Route path="/appointments" exact component={AppointmentsList}/>
            <Route path="/appointments/:id" component={Appointment}/>
            <Route path="/conditions" exact component={ConditionsList}/>
            <Route path="/conditions/:id" component={Condition}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
