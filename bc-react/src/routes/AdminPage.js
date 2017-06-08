import React, {Component} from 'react';
import AdminStore from '../stores/AdminStore';
import PlaceStore from '../stores/PlaceStore';
import AdminUsers from '../components/AdminUsers';
import AdminPlaces from '../components/AdminPlaces';
import AdminEvents from '../components/AdminEvents';

//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      places: PlaceStore.getPlaces(),
      users: AdminStore.getUsers(),
      displayUsers: false,
      displayPlaces: false,
      displayEvents: false,
      eventSelected: false,
      userSelected: false,
      placeSelected: false
    }
  }
  //the admin store deletes a user, it yells 'ive changed!' to everyone who's listening, and when it does that it calls updateUsers. (we told componentwillmount to issue this whenever there's a change)
  updateUsers(){
    this.setState({ users: AdminStore.getUsers() })}
  updatePlaces(){
    this.setState({ places: PlaceStore.getPlaces() })}

  componentWillMount(){
    AdminStore.on('change', this.updateUsers.bind(this))
    PlaceStore.on('change', this.updatePlaces.bind(this))
    }

  showUserList(){ value: this.state.value }
  showPlaceList(){ value: this.state.value }

  hoverUsers(){
    this.setState({placeSelected: false})
    this.setState({eventSelected: false})
    this.setState({userSelected: true})
  }
  hoverEvents(){
    this.setState({placeSelected: false})
    this.setState({eventSelected: true})
    this.setState({userSelected: false})
  }
  hoverPlaces(){
    this.setState({placeSelected: true})
    this.setState({eventSelected: false})
    this.setState({userSelected: false})
  }

  displayUsers(){
    this.setState({displayUsers: true})
    this.setState({displayEvents: false})
    this.setState({displayPlaces: false})
    this.setState({placeSelected: false})
    this.setState({eventSelected: false})
    this.setState({userSelected: true})
  }
  displayEvents(){
    this.setState({displayUsers: false})
    this.setState({displayEvents: true})
    this.setState({displayPlaces: false})
    this.setState({placeSelected: false})
    this.setState({eventSelected: true})
    this.setState({userSelected: false})
  }
  displayPlaces(){
    this.setState({displayUsers: false})
    this.setState({displayEvents: false})
    this.setState({displayPlaces: true})
    this.setState({placeSelected: true})
    this.setState({eventSelected: false})
    this.setState({userSelected: false})
  }

    userAdmin(){
      if(this.state.displayUsers === true){
        //change color to green
        return (<AdminUsers />)
      }else{ return ("") }}
    placeAdmin(){
      if(this.state.displayPlaces === true){
        return (<AdminPlaces />)
      }else{ return ("") }}
    eventAdmin(){
      if(this.state.displayEvents === true){
        return (<AdminEvents />)
      }else{ return ("") }}

  render(){
    const eventButtonColor = this.state.eventSelected ? "#def9a3" : "#eeeeee"
    const userButtonColor = this.state.userSelected ? "#def9a3" : "#eeeeee"
    const placeButtonColor = this.state.placeSelected ? "#def9a3" : "#eeeeee"

    return(
      <div id="admin_container">
        <h3>hello there, admin</h3>
        <br></br>
        <div id="admin_button_wrapper">
          <button
            className="admin_button"
            type="button"
            style={{backgroundColor: placeButtonColor}}
            onMouseOver={this.hoverPlaces.bind(this)}
            onClick={this.displayPlaces.bind(this)}>
          manage places</button>
          <button
            className="admin_button"
            type="button"
            style={{backgroundColor: userButtonColor}}
            onMouseOver={this.hoverUsers.bind(this)}
            onClick={this.displayUsers.bind(this)}>
          manage users</button>
          <button
            className="admin_button"
            type="button"
            style={{backgroundColor: eventButtonColor}}
            onMouseOver={this.hoverEvents.bind(this)}
            onClick={this.displayEvents.bind(this)}>
            manage events</button>
        </div>
        <br></br><br></br><br></br>
          {this.userAdmin()}
          {this.placeAdmin()}
          {this.eventAdmin()}
      </div>
      );
    }
  }
export default AdminPage;
