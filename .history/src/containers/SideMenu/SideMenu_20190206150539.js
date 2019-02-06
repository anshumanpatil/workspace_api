import React, { Component } from 'react';
import { NavbarCollapse, NavbarHeader } from '../../components';
// import jQuery from 'jquery';
class SideMenu extends Component {

  componentDidMount() {
    // TODO change classie to jQuery and toggle button place
    var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeftPush = document.getElementById( 'showLeftPush' ),
    body = document.body;
    
    showLeftPush.onclick = function() {
      window.classie.toggle( this, 'active' );
      window.classie.toggle( body, 'cbp-spmenu-push-toright' );
      window.classie.toggle( menuLeft, 'cbp-spmenu-open' );
      if(!window.classie.has( this, 'active' )){

      }
      // disableOther( 'showLeftPush' );
    };
  }

  render() {
    return (
      <div className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
        <aside className="sidebar-left">
          <nav className="navbar navbar-inverse">
            <NavbarHeader 
              heading={"Health"} 
              headingText={"Heading Text"} 
              headingIcon={"fa-medkit"}>
            </NavbarHeader>

            <NavbarCollapse></NavbarCollapse>
          </nav>
        </aside>
      </div>
    );
  }
}

export default SideMenu;