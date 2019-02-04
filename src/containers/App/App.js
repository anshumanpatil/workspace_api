import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Switch } from 'react-router-dom';
import { LoginAction } from '../../actions'

// import { mapDispatchToProps, mapStateToProps } from '../../mappingFunctions';
import MainRoutes from '../../routes/MainRoutes'
class App extends Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.hasOwnProperty('user')){
      this.setState({ user: nextProps.user });
    }
  }

  render() {
    return (
      <div>
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

function mapDispatchToProps(dispatch) {
  return {
    loginApplication: (credentials) => {
      return dispatch(LoginAction(credentials));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);