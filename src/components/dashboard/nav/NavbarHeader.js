import React, { Component } from 'react';
class NavbarHeader extends Component {
  render() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <h1>
          <a className="navbar-brand" href="/">
            <span className={ `fa ${ this.props.headingIcon || "fa-car" }` }></span> {this.props.heading || "Health App"}
            <span className="dashboard_text">{this.props.headingText || "Design dashboard"}</span>
          </a>
        </h1>
      </div>
    );
  }
}

export default NavbarHeader;