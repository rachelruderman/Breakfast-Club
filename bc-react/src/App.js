import React, { Component } from 'react';
import UserSignUp from './routes/UserSignUp';
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import UserProfile from './routes/UserProfile';
import UserProfile2 from './routes/UserProfile2';
import TestEvent from './routes/TestEvent';
import SplashPage from './routes/SplashPage';
import AdminPage from './routes/AdminPage';
import {updatePlaces} from './actions'
import {checkLogin} from './actions'
import PlaceIndex from './routes/PlaceIndex'
import CurrentEvent from './routes/CurrentEvent'
import Photos from './routes/Photos'
import VotePage from './routes/VotePage'
import FlexPractice from './components/FlexPractice'
import './style/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//only the most parent component should be responsible for fetching data, aka here?

class App extends Component {
  constructor(props){
    super(props)
    checkLogin()
    updatePlaces()
    this.state = {}
  }

  handleInitialHome(){
    return (
      <Home initial="true"/>
    )
  }

  handleDefaultHome(){
    return (
      <Home initial="false"/>
    )
  }

  render() {
    return (
      <div>
      <Router>
        <div>
            <Route exact path='/' component={SplashPage}/>
            <Route exact path='/signup' component={UserSignUp} />
            <Route exact path='/login' component={UserLogin} />
            <Route exact path='/places' component={PlaceIndex} />
            <Route exact path='/admin' component={AdminPage} />
            <Route exact path='/home-initial' render={this.handleInitialHome} />
            <Route exact path='/home' render={this.handleDefaultHome} />
            <Route exact path='/profile' component={UserProfile} />
            <Route exact path='/profile2' component={UserProfile2} />
            <Route exact path='/test-event' component={TestEvent} />
            <Route path='/current-event' component={CurrentEvent} />
            <Route path='/photos' component={Photos} />
            <Route path='/vote' component={VotePage} />
            <Route path='/flex' component={FlexPractice} />
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
