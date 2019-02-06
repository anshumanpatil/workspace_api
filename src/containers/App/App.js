import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Switch } from 'react-router-dom';
import MainRoutes from '../../routes/MainRoutes';
import Loader from '../Loader'
import './App.css';

class App extends Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.hasOwnProperty('user')){
      this.setState({ user: nextProps.user });
    }
  }

  render() {
    return (
      <div>
        <Loader/>
        {/* <i className="fa fa-car"></i>
        <i className="fa fa-car" style={{ 'fontSize' : '48px' }}></i>
        <i className="fa fa-car" style={{ 'fontSize' : '60px', 'color' : 'red' }}></i> */}
        <BrowserRouter>
          <Switch>
            {MainRoutes}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);