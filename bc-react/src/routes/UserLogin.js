import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/header';
import {loginUser} from '../actions';

class UserLogin extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {
        email: "",
        password: ""
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

  handleSubmit(e){
    e.preventDefault();
    loginUser(this.state.user)
  }

render(){
  return (
    <div>
      <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4 FontAmatic">
              Log In
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6">
              <form className='form' onSubmit={this.handleSubmit.bind(this)}>
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
                    type='submit'
                    value='Let Me In!!'>
                  </input>
                </div>
              </form>
            </div>
            <div className="col-sm-3">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4 center">
              <Link to="/">
                <button
                  className="BackButton"
                  type="button">
                  Take Me Back!!
                </button>
              </Link>
            </div>
            <div className="col-sm-4">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserLogin;
