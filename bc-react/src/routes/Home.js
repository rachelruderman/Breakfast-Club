import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Reminder from '../components/Reminder';
import {fetchEvents, checkIfVotingOver, fetchCurrentEvent, checkEventOver} from '../actions';
// import {checkLoginRedir} from '../actions'
import BigCalendar from 'react-big-calendar';
import userStore from '../stores/UserStore';
import eventStore from '../stores/EventStore';
import moment from 'moment';
import Header from '../components/Header';
import MessageBoardToggle from '../components/MessageBoardToggle';
// import placeStore from '../stores/PlaceStore'
import {logout} from '../actions/UserActions';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: userStore.getFields(),
      event: eventStore.getCurrentEvent(),
      events: []
    }
    // this.onlogin = this.handleLogin.bind(this)
    // this.onlogout = this.handleLogOut.bind(this)
    this.oncurrent = this.updateCurrentEvent.bind(this)
    this.onevents = this.events.bind(this)
    console.log("this.props.initial:", this.props.initial)
    if (this.props.initial){
      fetchCurrentEvent()
      fetchEvents();
    }
  }

  componentWillMount(){
    // userStore.on('logged-in', this.onlogin)
    // userStore.on('logged-out', this.onlogout)
    eventStore.on('current event fetched', this.oncurrent)
    eventStore.on('event created',this.oncurrent)
    eventStore.on('events fetched', this.onevents)
    // checkLoginRedir(this.props, userStore.getUser());
  }

  componentWillUnmount(){
    // userStore.removeListener('logged-in', this.onlogin)
    // userStore.removeListener('logged-out', this.onlogout)
    eventStore.removeListener('current event fetched', this.oncurrent)
    eventStore.removeListener('event created',this.oncurrent)
    eventStore.removeListener('events fetched', this.onevents)
  }

 //  componentWillUpdate(){
 //   checkLoginRedir(this.props)
 // }

  // handleLogin(){
  //   console.log("handleLogin called")
  //   this.setState({
  //     user: userStore.getUser(),
  //   })
  // }

  handleLogOut(){
    logout()
  }

  updateCurrentEvent(){
    checkIfVotingOver(eventStore.getCurrentEvent())
    checkEventOver(eventStore.getCurrentEvent(), this.state.user.id)
    this.setState({
      event: eventStore.getCurrentEvent()
    })
  }

  events(){
    let bevents = eventStore.getAllEvents()
    let newEvents = bevents.map(function(bevent){
      let start = moment(bevent.date).toDate()
      let end = moment(bevent.date).add(1, 'hours').toDate()
      let placeName = bevent.place.name
      return {
        'title': placeName,
        'start': start,
        'end': end
      }
    })
    this.setState({
      events: newEvents
    })
  }

  checkCalendar(){
    if(this.state.events.length > 0){
      return(
      <BigCalendar
        events={this.state.events}
      />
    )
  }else{
    return(<div>Loading...</div>)
    }
  }

  render(){
    return (
        <div className="wrapper">{/* //this is the flex container */}
            <SideBar
              isAdmin={this.state.user.admin}
              handleLogOut={this.handleLogOut}
            />{/* //this is a flex item  with a nested flex container */}
          <div className='home-page'>{/* //this is a flex item */}
            <div className='nested'>{/* //this is a nested flex container */}
              <SideBarMini
                isAdmin={this.state.user.admin}
                handleLogOut={this.logout}
              />
              <Header />
          <div className="welcome-message">
            <div className='welcome-user'>Hey, {this.state.user.firstName}! </div>
            <div className='reminder'><Reminder /></div>
            <div className='upcoming-event'><Link to='/current-event'>Current Event</Link></div>
          </div>
          <div className="calendar-div">{this.checkCalendar()}</div>
          <MessageBoardToggle />
        {/* <iframe src="https://giphy.com/embed/3oaPtHC37Vx0Q" frameBorder="0" allowFullScreen></iframe> */}
      </div>
      </div>
      <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
    </div>
    );
  }
}

export default Home;
