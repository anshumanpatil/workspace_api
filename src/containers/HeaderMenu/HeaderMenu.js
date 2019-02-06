import React, { Component } from 'react';
import { MailDropDown, NotificationDropDown, TaskDropDown, SearchBox, ProfileDopDown, SideMenu } from '../../components';
class HeaderMenu extends Component {
  render() {
    return (
      <div className="sticky-header header-section ">
        <div className="header-left">
          <button id="showLeftPush">
            <i className="fa fa-bars"></i>
          </button>
          <div className="profile_details_left">
            <ul className="nofitications-dropdown">
              <MailDropDown />
              <NotificationDropDown />
              <TaskDropDown />
            </ul>
            <div className="clearfix"> </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="header-right">
          <SearchBox />
          <div className="profile_details">
            <ProfileDopDown />
          </div>
          <SideMenu.CLEARFIX/>
        </div>
          <SideMenu.CLEARFIX/>
      </div>
    );
  }
}

export default HeaderMenu;