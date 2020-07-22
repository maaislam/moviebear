import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  onMovieBtnClick, onTvBtnClick  } from '../actions'
import logo from '../assets/logo512.png'

import {  Link  } from 'react-router-dom'

class Header extends Component {

   
    onMovieBtnClick = () => {
        this.props.onMovieBtnClick();
    }
    onTvBtnClick = () => {
        this.props.onTvBtnClick();
    }


 


    render() {
        return (
                <div className="ui top fixed menu">
                    <div className="item" >
                        <img src={logo} alt="logo"/>
                    </div>
                    <Link  to = "/" className={`item link ${this.props.movieClick?'active':null}`} onClick = {this.onMovieBtnClick} >
                        Movies
                    </Link>
                    <Link to = "/" className={`item link ${this.props.tvClick?'active':null}`} onClick = {this.onTvBtnClick} >
                        TV Shows
                    </Link>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..."/>
                                <i className="search link icon"></i>
                            </div>
                        </div>
                        <a className="ui item" href="/">
                            Sign In
                        </a>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieClick:state.movies.movieBtnClick,
        tvClick:state.movies.tvBtnClick
    }
}

export default connect(mapStateToProps, {onMovieBtnClick, onTvBtnClick})(Header);
