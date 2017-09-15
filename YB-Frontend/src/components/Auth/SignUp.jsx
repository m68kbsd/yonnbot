import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import authActionCreators from '../../actions/authActionCreators';


class App extends Component {
  constructor(props) {
    super(props);

    this._handleSignUp = this._handleSignUp.bind(this);
  }

  _handleSignUp(event) {

    event.preventDefault();

    let username = this.refs.username.value;
    let password =  this.refs.password.value;
    let email = this.refs.email.value;

    if (username.length > 0 && password.length > 0 && email.length > 0 ) {

      console.log('sending register new user');
      this.props.signUp(username, email, password);

    } else {
      console.log('error sending new post');
    }

    this.refs.username.value = '';
    this.refs.email.value= '';
    this.refs.password.value = '';
  }


  render () {

    const buttonStyle = {
      width: "100%",
      backgroundColor: "#2ab27b",
      border: "none",
      color: "#ffffff"
    }

    return (
      <div className="tab-pane fade in active" id="signup-form">
        <form className="form" onSubmit={this._handleSignUp}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" ref="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" ref="password" />
          </div>
          <button type="submit" className="btn btn-default" style={buttonStyle}>Sign up</button>
        </form>
      </div>      
    );
  }
}

const mapStateToProps = (state, ownProps) => { return {} }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (username, email, password) => {
      dispatch(authActionCreators.registerUser(username, email, password));
    }
  }
}

const Register = connect(mapStateToProps, mapDispatchToProps)(App);

export default Register;