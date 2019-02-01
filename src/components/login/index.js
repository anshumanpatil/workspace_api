import React, { Component } from 'react';
import { connect } from "react-redux";
import { LoginAction } from '../../actions'
class Login extends Component {

  onLoginClick = (e) => {
    this.props.loginApplication(this.state)
    //window.location.href="/dashboard"
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.id]: e.target.value });
  }

  constructor(props) {
    super(props);
    console.log("props Login", props)
    this.state = {
      "username": "",
      "password": "",
    }
    this.onLoginClick = this.onLoginClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <div>
        <div>{this.props.val}</div>
        UserName - <input type="text" id="username" value={this.state.username} onChange={this.handleChange} /> <br />
        PassWord - <input type="text" id="password" value={this.state.password} onChange={this.handleChange} /> <br />
        <button type="button" onClick={this.onLoginClick}>Login</button>
        <br /><a href="/register">link text</a>
      </div>

    );
  }
}
const mapStateToProps = state => {
  return { val: state.val };
};

function mapDispatchToProps(dispatch) {
  return {
    loginApplication: (credentials) => {
      return dispatch(LoginAction(credentials));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);;