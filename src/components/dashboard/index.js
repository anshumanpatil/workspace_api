import React, { Component } from 'react';
import { connect } from "react-redux";
class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div>
        Dashboard
    </div>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Dashboard);
