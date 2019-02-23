import React, { Component } from 'react';
import { connect } from "react-redux";
import { LoginAction } from '../../actions'
class Login extends Component {

  onLoginClick = (e) => {
    // console.log(this.props)
    this.props.loginApplication(this.state)
    //window.location.href="/dashboard"
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.id]: e.target.value });
  }

  constructor(props) {
    super(props);
    
    this.state = {
      "username": "anshu7875797913@gmail.com",
      "password": "anshu7875797913",
    }
    this.onLoginClick = this.onLoginClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps nextProps nextProps", nextProps)
    if(nextProps.hasOwnProperty('user')){
      this.setState({ user: nextProps.user });
      this.props.history.push('/dashboard')
    }
  }
  render() {
    return (
      <div id="page-wrapper">
          <div className="main-page login-page ">
              <h2 className="title1">Login</h2>
              <div className="widget-shadow">
                  <div className="login-body">
                  <input type="email" id="username" className="user" value={this.state.username} onChange={this.handleChange} placeholder="Enter Your Email"/>
                  <input type="password" id="password" className="lock" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                      <div className="forgot-grid">
                      <div className="row">
                        <div className="col-md-6">
                          <input type="button" name="forgot" value="Forgot Password" className="btn btn-info pull-left" style={{'width':'100%'}}/>
                        </div>
                        <div className="col-md-6">
                          <input type="button" name="register" value="Register" className="btn btn-info pull-right" style={{'width':'100%'}}/>
                        </div>
                      </div>
                      </div>
                      <input type="submit" name="Sign In" value="Sign In" onClick={this.onLoginClick}/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

function mapDispatchToProps(dispatch) {
  return {
    loginApplication: (credentials) => {
      return dispatch(LoginAction(credentials));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);