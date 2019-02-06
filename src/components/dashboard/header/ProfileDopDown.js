import React, { Component } from 'react';
class ProfileDopDown extends Component {
    render() {
        return (
            <ul>
                <li className="dropdown profile_details_drop">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <div className="profile_img">
                            <span className="prfil-img">
                                <img src="images/2.jpg" alt="" /> </span>
                            <div className="user-name">
                                <p>Admin Name</p>
                                <span>Administrator</span>
                            </div>
                            <i className="fa fa-angle-down lnr"></i>
                            <i className="fa fa-angle-up lnr"></i>
                            <div className="clearfix"></div>
                        </div>
                    </a>
                    <ul className="dropdown-menu drp-mnu">
                        <li>
                            <a href="#">
                                <i className="fa fa-cog"></i> Settings</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-user"></i> My Account</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-suitcase"></i> Profile</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-sign-out"></i> Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default ProfileDopDown;