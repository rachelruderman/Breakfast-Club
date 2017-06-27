import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import {loginUser, checkLoginRedir, createNewEvent} from '../actions';
import userStore from '../stores/UserStore';
import ('../style/UserLogin.css');

class UserLogin extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {
        email: "",
        password: ""
      },
      message: ''
    }
  }

  componentWillMount(){
    userStore.on('login-success', this.redirectToHome.bind(this));
    userStore.on('login-fail', this.loginFailed.bind(this));
    checkLoginRedir(this.props)
  }

  redirectToHome(){
    this.props.history.push("/home-initial");
  }

  loginFailed(){
    this.setState({
      message: 'Login failed, credentials invalid'
    })
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
    if (this.state.user.email === "" || this.state.user.password === ""){
      this.setState({
        message: "Email and password required"
      })
    }
    else {
      loginUser(this.state.user)
    }
  }

render(){
  return (
    <div className="login-signup-container">
      <div className="FontAmatic">
      <div id="sign_up">
        Log In
      </div>
      <div className="alert alert-warning"><strong>{this.state.message}</strong></div>
          <div>
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
              <div className="login-signup-container">
                  <Link className="take-me-back" to="/">
                    Take Me Back!!
                  </Link>
              <div className='formGroup signup'>
                <input className='' type='submit' value='Let Me In!!'></input>
              </div>
              </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
export default UserLogin;
