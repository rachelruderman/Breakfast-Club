import React, {Component} from 'react';
import AdminList from './AdminList';
import SearchBar from './AdminSearchBar';
import placeStore from '../../stores/PlaceStore';
import AdminModal from './AdminModal'
//once you make the component generic, you move the parts that are different out to the parent and pass them in as props
//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminPlaces extends Component {
  constructor(props){
    super(props)
    this.state = {places: placeStore.getPlaces(),
                  displayModal: false}
  }
  updatePlaces(){
    this.setState({
      places: placeStore.getPlaces() })}

  componentWillMount(){
    placeStore.on('change', this.updatePlaces.bind(this)) }

  showPlaceList(){
    value: this.state.value }

  displayModal(){
    this.setState({displayModal: true})}

  placeParams(){
    return(
      { place: {
          name: "",
          yelp_rating: "",
          categories: "",
          price: "",
          address_street: "",
          phone: ""
      }})
  }

  placeListParams(){
    return({places: placeStore.getPlaces()})
  }

  modalAdmin(){
    if(this.state.displayModal === true){
    return (<AdminModal placeForm={true} startingState={this.placeParams()}/>)
    } else { return ("") }}

  render(){
    return(
      <div id="admin_container">
        <h3 className='center'>Places</h3>
        <div id="search_bar_wrapper">
          <button className="add_button" type="button"
            onClick={this.displayModal.bind(this)}>
            + place </button>
          {/* now SearchBar has access to places */}
          <SearchBar places={this.state.places} placeSearchBar={true}/>
        </div>
          <br></br><br></br>
          <AdminList placeList={true} startingState={this.placeListParams()}/>
          {this.modalAdmin()}
      </div>
      );
    }
  }
export default AdminPlaces;
