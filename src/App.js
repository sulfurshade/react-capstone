import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'normalize.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Patient from './patients/patient';
import PatientsList from './patients/patients-list';
import CreatePatient from './patients/create-patient';
import Doctor from './doctors/doctor';
import DoctorsList from './doctors/doctors-list';
import CreateDoctor from './doctors/create-doctor';
import Appointment from './appointments/appointment';
import AppointmentsList from './appointments/appointments-list';
import CreateAppointment from './appointments/create-appointment';
import Condition from './conditions/condition';
import ConditionsList from './conditions/conditions-list';
import CreateCondition from './conditions/create-condition';
import Login from './Login';
import  { Redirect } from 'react-router-dom'

class App extends Component {
  logout() {
    window.localStorage.removeItem('token');
    window.location.pathname = "/login";
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">FindDoc</h1>
            <ul className="nav-links">
              <li><Link to="/patients">Patients</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/appointments">Appointments</Link></li>
              <li><Link to="/conditions">Profile</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><button onClick={this.logout}>Logout</button></li>
            </ul>
          </header>

          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/patients" exact component={PatientsList}/>
            <Route path="/patients/:id" component={Patient}/>
            <Route path="/create-patient" component={CreatePatient}/>
            <Route path="/doctors" exact component={DoctorsList}/>
            <Route path="/doctors/:id" component={Doctor}/>
            <Route path="/create-doctor" component={CreateDoctor}/>
            <Route path="/appointments" exact component={AppointmentsList}/>
            <Route path="/appointments/:id" component={Appointment}/>
            <Route path="/create-appointment" component={CreateAppointment}/>
            <Route path="/conditions" exact component={ConditionsList}/>
            <Route path="/conditions/:id" component={Condition}/>
            <Route path="/create-condition" component={CreateCondition}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
