import React, { Component } from 'react';
import '../assests/css/Post.css'
// #############################################################################################
class Post extends Component {
    render() {
        return (
            <div className="Post">
                <div className="body">
                    <div className="navbar">
                        <div className="left">
                            <div className="profile-pic">
                                <div className="border"></div>
                                <img src={this.props.user_img} alt={this.props.user_img_alt} />
                            </div>
                            <div className="user-name">
                                <div className="name">{this.props.first_name + " " + this.props.last_name}</div>
                                <div className="since">{this.props.since}</div>
                            </div>
                        </div>
                        <div className="right">
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="content">
                        <p className="post-text">{this.props.post_text}</p>
                        <img className="post-img" src={this.props.post_img} />
                    </div>
                </div>
                <div className="comments">
                    <div className="row-a"></div>
                    <div className="row-b">
                        <div className="like icon-div">
                            <i className={"material-icons "+(this.props.isliked && "text-danger")}>favorite</i>
                            <div className="icon-text">Love</div>
                        </div>
                        <div className="comment icon-div">
                            <i className={"material-icons "+(this.props.isliked && "text-success")}>mode_comment</i>
                            <div className="icon-text">Comment</div>
                        </div>
                        <div className="share icon-div">
                            <i className="material-icons">share</i>
                            <div className="icon-text">Share</div>
                        </div>
                    </div>
                    <div className="row-c"></div>
                    <div className="row-d"></div>
                </div>
            </div>
        )
    }
}
export default Post;