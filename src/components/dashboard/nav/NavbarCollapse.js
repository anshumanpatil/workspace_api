import React, { Component } from 'react';
import { SideMenu } from '../../../components';


class NavbarCollapse extends Component {

  componentDidMount() {
    console.log("window.jQuery", window.jQuery)
    window.jQuery(".sidebar-menu").SidebarNav();
  }

  render() {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="sidebar-menu">
          <SideMenu.CONTENT
            liClass="header"
            liContent="HEADING"
          />
          <SideMenu.LI
            liClass="treeview"
            redirect="/dashboard/profile"
            icon="fa-dashboard"
            text="Dashboard"
          />
          <SideMenu.CONTENT
            liClass="treeview"
            liContent={
              <a href="/">
                <i className="fa fa-laptop"></i>
                <span>Components</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
            }
            liUL={
              <ul className="treeview-menu">
                <SideMenu.LI
                  liClass=""
                  redirect="/grids"
                  icon="fa-angle-right"
                  text="Grids"
                />
                <SideMenu.LI
                  liClass=""
                  redirect="/media"
                  icon="fa-angle-right"
                  text="Media Css"
                />
              </ul>
            }
          />
        </ul>
      </div>
    );
  }
}

export default NavbarCollapse;