import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  
    onMovieBtnClick, 
    onTvBtnClick, 
    toggleSigningModal, 
    onSubmit, 
    googleSignInRequest, 
    facebookSignInRequest,
    showSignInForm,
    showSignUpForm,
    searchMedia,
    searchRequest} from '../actions';



import TrailerModal from './TrailerModal';

import {  Link  } from 'react-router-dom'
import LogInForm from './auth/LogInForm';
import Auth from './auth/Auth';
import UserSnippet from './UserSnippet';
import SocialLogIn from './SocialLogIn';
import SignUpForm from './auth/SignUpForm';
import SearchInput from './SearchInput';

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
                        <div onClick = {this.showSignInForm} className={`item ${this.props.signInForm?'active':''}`}>Sign In</div>
                        <div onClick = {this.showSignUpForm} className={`item ${this.props.signUpForm?'active':''}`}>Sign Up</div>
                    </div>
                    <SocialLogIn  
                        googleSignInRequest = {this.googleSignInRequest}
                        facebookSignInRequest = {this.facebookSignInRequest}/>
                    {
                    this.props.signInForm 
                    
                    ?
                    
                    <LogInForm 
                        onSubmit = {this.onSubmit}/>
                    :

                    <SignUpForm
                        onSubmit = {this.onSubmit}
                    />
                    }
                </div> 
            </>
        )
                
    };

    showSigningModal = () => {
            if (this.props.modal){
                
                return (
                    <TrailerModal 
                        closeModal = {this.props.toggleSigningModal}
                        content = {this.showSigningForm()}
                        />
                )
            } else {
               // this.props.showSignInForm()
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

    searchMovieAndTv = (formValues) => {
       
        if (this.props.movieClick){
            
            this.props.searchMedia('movie', formValues);
            this.props.searchRequest();
           // this.props.history.push('/')
        }else if (this.props.tvClick){
           
            this.props.searchRequest()
            this.props.searchMedia('tv', formValues) 
            //this.props.history.push('/')
        }
    }

    render() {
        return (
                
                <div className="ui mini inverted top fixed menu" >
                    {this.showSigningModal()}
                    <Link to = "/" className="item" >
                        <i className = "big purple film icon"></i>
                    </Link>
                    <Link  to = "/" className={` blue item ${this.props.movieClick?'active':null}`} onClick = {this.onMovieBtnClick} style ={{fontSize:'1.2rem'}}>
                         All Movies
                    </Link>
                    <Link to = "/" className={`blue item  ${this.props.tvClick?'active':null}`} onClick = {this.onTvBtnClick} style ={{fontSize:'1.2rem'}} >
                        All TV Shows
                    </Link>
                    <div className="right menu">
                        <div className="item">
                            <SearchInput 
                                rederPlaceholder = {this.props.movieClick?'Search Movies':'Search TV Shows'}
                                onSearchSubmit = {this.searchMovieAndTv}/>
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
    toggleSigningModal, 
    onSubmit, 
    googleSignInRequest, 
    facebookSignInRequest,
    showSignInForm,
    showSignUpForm,
    searchMedia,
    searchRequest})(Header);
