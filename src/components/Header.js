import React, { Component } from 'react';
import { connect } from 'react-redux'

import {  
    onMovieBtnClick, 
    onTvBtnClick, 
    openSigningModal, 
    onSubmit, 
    googleSignInRequest, 
    facebookSignInRequest,
    showSignInForm,
    showSignUpForm} from '../actions';



import TrailerModal from './TrailerModal';

import {  Link  } from 'react-router-dom'
import LogInForm from './auth/LogInForm';
import Auth from './auth/Auth';
import UserSnippet from './UserSnippet';
import SocialLogIn from './SocialLogIn';
import SignUpForm from './auth/SignUpForm';

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

    googleSignInRequest = () => {
        this.props.googleSignInRequest()
    }
    facebookSignInRequest = () => {
        this.props.facebookSignInRequest()
    }
    showSignInForm = () => {
        this.props.showSignInForm()
    }
    showSignUpForm = () => {
        this.props.showSignUpForm()
    }
    


    showSigningForm = () => {



        return( 
            <>
                <div className= "ui centered card" >
                    <div className="ui menu">
                        <div onClick = {this.showSignInForm} className="item active">Sign In</div>
                        <div onClick = {this.showSignUpForm} className="item">Sign Up</div>
                    </div>
                    <SocialLogIn  
                        googleSignInRequest = {this.googleSignInRequest}
                        facebookSignInRequest = {this.facebookSignInRequest}/>
                    {
                    this.props.signInForm?
                    
                    <LogInForm 
                        onSubmit = {this.onSubmit}/>
                    :

                    <SignUpForm/>
                    }
                </div> 
            </>
        )
                
    };

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
    showUserSnippet = () =>{
        if (this.props.isSignedIn){
            return (
            <UserSnippet name ={this.props.userName} userImg = {this.props.userImg}/>
            )
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
                        <>
                            {this.showUserSnippet()}
                        </>
                        <div  className="item">
                            <Auth/>
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
        modal:state.movies.modals.signingModal,
        userName:state.auth.user.name,
        userImg: state.auth.user.userImg,
        isSignedIn:state.auth.isSignedIn,
        signInForm: state.auth.signInForm,
        signUpForm: state.auth.signUpForm
    }
}

export default connect(mapStateToProps, {
    onMovieBtnClick, 
    onTvBtnClick, 
    openSigningModal, 
    onSubmit, 
    googleSignInRequest, 
    facebookSignInRequest,
    showSignInForm,
    showSignUpForm})(Header);
