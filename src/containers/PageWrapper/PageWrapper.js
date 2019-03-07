import React, { Component } from 'react';
class PageWrapper extends Component {
  componentDidMount(){
    console.log("this.props PageWrapper", this.props)
  }
  render() {
    return (
      <div id="page-wrapper">
        PageWrapper
      </div>
    );
  }
}

export default PageWrapper;