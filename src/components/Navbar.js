import React, { Component } from 'react';
import "../assests/css/Navbar.css"
class Navbar extends Component {
    render() {
        return (
            <div className="desktop-navbar">
                <div className="navbar-container">
                    <div className="n-left">
                        <a href="/"><div className="text-logo">{this.props.site_name}</div></a>
                    </div>
                    <div className="n-right">
                        <div className="owner-info">
                            <div className="profile-img">
                                <img className="user-pic" src={this.props.user_img} alt={this.props.user_img_alt} />
                                <div className="user-pic-border"></div>
                            </div>
                            <div className="profile-name">
                                <div className="ui dropdown">
                                    <div className="text">{this.props.user_first_name + " " + this.props.user_last_name}</div>
                                    <i className="dropdown icon"></i>
                                    <div className="menu" style={{ width: "150px", marginTop: "15px" }}>
                                        <div className="item">Settings</div>
                                        <div className="item logout-btn">Log out</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="notifications">
                            <div className="dropdown">
                                <div className="notification-container" id="msg-dropdown" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <div className="message-num">{this.props.msg_count}</div>
                                    <i className="material-icons">textsms</i>
                                </div>
                                <div className="dropdown-menu msg-dropdown-div" aria-labelledby="msg-dropdown">
                                    <div className="msg-dd-header">
                                        <div className="left">
                                            Messages({this.props.msg_count})
                            </div>
                                        <div className="right"></div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div className="dropdown">

                                <div className="notification-container" id="notification-dropdown" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <div className="bell-num">{this.props.notifications_count}</div>
                                    <i className="material-icons">notifications_none</i>
                                </div>

                                <div className="dropdown-menu notification-dropdown-div" aria-labelledby="notification-dropdown">
                                    <div className="not-dd-header">
                                        <div className="left">
                                            Notifications({this.props.notifications_count})
                            </div>
                                        <div className="right"></div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;