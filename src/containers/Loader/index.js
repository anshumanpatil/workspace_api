import React, { Component } from 'react';
import { connect } from "react-redux";

class Loader extends Component {
  __loading = {"display":"none"};

  render() {
    let {isLoading} = this.props;
    this.__loading = (isLoading)? {"display":""} : {"display":"none"};
    return (
      <div>
        <div id="loader-wrapper" style={this.__loading}>
            <div id="loader"></div>
            <div className="loader-section section-left">LOADING</div>
            <div className="loader-section section-right"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { isLoading: state.isLoading };
};

export default connect(mapStateToProps)(Loader);