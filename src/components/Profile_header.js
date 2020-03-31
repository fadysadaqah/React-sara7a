import React, { Component } from 'react'
import "../assests/css/Profile_header.css"
class Profile_header extends Component {
    render() {
        return (
            <div class="t-cover-photo">
                <img class="t-cover-img"
                    src="https://wallpaperplay.com/walls/full/b/b/e/49261.jpg" alt="" />
                <div class="cover-img-gradient"></div>
                <div class="t-profile-and-buttons">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={this.props.user_img} alt="" class="t-avatar" />

                        <div class="user-name">{this.props.first_name + " " + this.props.last_name}</div>

                    </div>

                    <div class="t-buttons">
                        <div class="ui labeled button" tabindex="0" style={{ alignSelf: "flex-end" }}>
                            <div class="ui red button">
                                <i class="heart icon"></i> Crushes
                    </div>
                            <a class="ui basic red left pointing label">{this.props.crush_count}</a>
                        </div>
                        <div class="ui labeled button" tabindex="0" style={{ alignSelf: "flex-end" }}>
                            <div class="ui blue button">
                                <i class="user icon"></i> Followers</div>
                            <a class="ui basic blue left pointing label">{this.props.follow_count}</a>
                        </div>
                    </div>
                </div>
                <div class="user-data"></div>
            </div>
        )


    }
}
export default Profile_header;