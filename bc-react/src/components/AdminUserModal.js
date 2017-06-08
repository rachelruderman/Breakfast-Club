import React, { Component } from 'react';
import {addUser} from '../actions';
import {updateUsers} from '../actions';
class AdminUserModal extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {
        firstName: "",
        lastName: "",
        email: "",
        neighborhood: "",
        password: "",
        verifyPassword: ""
      }
    }
  }

  handleChange(e){
    let target = e.target
    let user = this.state.user
    user[target.name] = target.value
    this.setState({
      user: user
    })
  }
//addUser and updateUsers are asynchronous because they're in the store
  handleSubmit(e){
    e.preventDefault();
    addUser(this.state)
    //how come not always immediate?
    updateUsers(this.state)
  }

  render(){
    return (
    <div>
      <div id='modal'>
        <span>&times;</span>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <input
              placeholder='first name'
              type='text'
              name='firstName'
              id='firstName'
              value={this.state.user.firstName}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='formGroup'>
            <input
              placeholder='last name'
              type='text'
              name='lastName'
              id='lastName'
              value={this.state.user.lastName}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='formGroup'>
          <input
            placeholder='email address'
            type='email'
            name='email'
            id='email'
            value={this.state.user.email}
            onChange={this.handleChange.bind(this)}>
          </input>
          </div>
          <div className='formGroup'>
          <input
            placeholder='neighborhood'
            type='text'
            name='neighborhood'
            id='neighborhood'
            value={this.state.user.neighborhood}
            onChange={this.handleChange.bind(this)}>
          </input>
          </div>
          <div className='formGroup'>
          <input
            placeholder='password'
            type='password'
            name='password'
            id='password'
            value={this.state.user.password}
            onChange={this.handleChange.bind(this)}>
          </input>
          </div>
          <div className='formGroup'>
          <input
            placeholder='reenter password'
            type='password'
            name='verifyPassword'
            id='verifyPassword'
            value={this.state.user.verifyPassword}
            onChange={this.handleChange.bind(this)}>
          </input>
          <div className='formGroup align-button'>
            <input type='submit' value='submission'></input>
          </div>
          </div>
          <br />
        </form>
      </div>
    </div>
    )
  }
}
export default AdminUserModal;
