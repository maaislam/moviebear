import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  onMovieBtnClick, onTvBtnClick, openSigningModal, onSubmit} from '../actions'
import TrailerModal from './TrailerModal';

import {  Link  } from 'react-router-dom'
import LogInForm from './auth/LogInForm';

class Header extends Component {

   
    onMovieBtnClick = () => {
        this.props.onMovieBtnClick();
    }
    onTvBtnClick = () => {
        this.props.onTvBtnClick();
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    showSigningForm = () => {
        return <LogInForm 
                onSubmit = {this.onSubmit}/>
    }

    showSigningModal = () => {
            if (this.props.modal){
                return (
                    <TrailerModal 
                        closeModal = {this.props.openSigningModal}
                        content = {this.showSigningForm()}
                        />
                )
            } else {
                return null
            }
    }
    render() {
        return (
                <div className="ui inverted top fixed menu" style = {{padding: '0 2rem'}}>
                    {this.showSigningModal()}
                    <Link to = "/" className="item" >
                        <i className = "big purple film icon"></i>
                    </Link>
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
                        <div onClick = {this.props.openSigningModal} className="ui link item">
                            Sign In
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieClick:state.movies.movieBtnClick,
        tvClick:state.movies.tvBtnClick,
        modal:state.movies.modals.signingModal
    }
}

export default connect(mapStateToProps, {onMovieBtnClick, onTvBtnClick, openSigningModal, onSubmit})(Header);
