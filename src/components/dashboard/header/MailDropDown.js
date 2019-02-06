import React, { Component } from 'react';
class MailDropDown extends Component {
    render() {
        return (
            <li className="dropdown head-dpdn">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-envelope"></i>
                    <span className="badge">4</span>
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <div className="notification_header">
                            <h3>You have 3 new messages</h3>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <div className="user_img">
                                <img src="images/1.jpg" alt="" />
                            </div>
                            <div className="notification_desc">
                                <p>Lorem ipsum dolor amet</p>
                                <p>
                                    <span>1 hour ago</span>
                                </p>
                            </div>
                            <div className="clearfix"></div>
                        </a>
                    </li>
                    <li className="odd">
                        <a href="#">
                            <div className="user_img">
                                <img src="images/4.jpg" alt="" />
                            </div>
                            <div className="notification_desc">
                                <p>Lorem ipsum dolor amet </p>
                                <p>
                                    <span>1 hour ago</span>
                                </p>
                            </div>
                            <div className="clearfix"></div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="user_img">
                                <img src="images/3.jpg" alt="" />
                            </div>
                            <div className="notification_desc">
                                <p>Lorem ipsum dolor amet </p>
                                <p>
                                    <span>1 hour ago</span>
                                </p>
                            </div>
                            <div className="clearfix"></div>
                        </a>
                    </li>
                    <li>
                        <div className="notification_bottom">
                            <a href="#">See all messages</a>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }
}

export default MailDropDown;