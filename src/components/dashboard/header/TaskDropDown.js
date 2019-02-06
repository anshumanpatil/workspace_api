import React, { Component } from 'react';
class TaskDropDown extends Component {
    render() {
        return (
            <li className="dropdown head-dpdn">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-tasks"></i>
                    <span className="badge blue1">8</span>
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <div className="notification_header">
                            <h3>You have 8 pending task</h3>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <div className="task-info">
                                <span className="task-desc">Database update</span>
                                <span className="percentage">40%</span>
                                <div className="clearfix"></div>
                            </div>
                            <div className="progress progress-striped active">
                                <div className="bar yellow" style={{ "width": "40%" }}></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="task-info">
                                <span className="task-desc">Dashboard done</span>
                                <span className="percentage">90%</span>
                                <div className="clearfix"></div>
                            </div>
                            <div className="progress progress-striped active">
                                <div className="bar green" style={{ "width": "90%" }}></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="task-info">
                                <span className="task-desc">Mobile App</span>
                                <span className="percentage">33%</span>
                                <div className="clearfix"></div>
                            </div>
                            <div className="progress progress-striped active">
                                <div className="bar red" style={{ "width": "33%" }}></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="task-info">
                                <span className="task-desc">Issues fixed</span>
                                <span className="percentage">80%</span>
                                <div className="clearfix"></div>
                            </div>
                            <div className="progress progress-striped active">
                                <div className="bar  blue" style={{ "width": "80%" }}></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className="notification_bottom">
                            <a href="#">See all pending tasks</a>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }
}

export default TaskDropDown;