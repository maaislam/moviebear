import React, { Component } from 'react';

import './MediaDetail.css'


class MediaDetail extends Component {
    render() {
        return (
                <div className="detail" style ={{}}>
                    <div className="poster"><img src={this.img_base_Url()} alt={this.props.mediaDetail.title}/></div>
                    <div className="more_detail">
                        <h1>{this.props.mediaDetail.title}</h1>
                        <div>
                            <span>release date</span>
                            <span>genre</span>
                        </div>
                        <div><h4>rating</h4></div>
                        <div>
                            <h3>Overview</h3>
                            <p>description</p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default MediaDetail;
