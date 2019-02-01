import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

// import { mapDispatchToProps, mapStateToProps } from '../../mappingFunctions';
import MainRoutes from '../../routes/MainRoutes'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {MainRoutes}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;