
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { userSignedIn, userSignedOut, toggleSigningModal} from '../../actions'

import {fire, googleProvider, facebookProvider} from './Fire'
import { Link } from 'react-router-dom';



class Auth extends Component {


  componentDidMount(){

    this.authListener();
    
  }
 
 
    authListener = () => {

    fire.auth().onAuthStateChanged((user) => {
      if (user ) {
        
        //console.log(user)
        var signedUser = {
          name: user.displayName,
          userImg:user.photoURL,
          userId:user.uid
        }

        this.props.userSignedIn(signedUser);
        
        } 
        else {
              // No user is signed in.

              this.props.userSignedOut();
              

            }
          });
        
    };

    renderLogInOutBtn = () => {

      if (this.props.isSignedIn){
        return(
          <div className = "ui grid"> 
            <div className = "eight wide column">
              <Link to = "/favourites" className = "ui violet button">
                Favourites
              </Link>
            </div>
            <div className = "eight wide column">
              <button className = "ui red button" onClick = {this.logout}>
                Sign Out
              </button>
            </div> 
          </div>
          )
      } else if (this.props.isSignedIn===false) {
        return (
                <button className = "ui primary button" onClick = {this.props.toggleSigningModal}>
                    Sign In
                </button>
              )    
      }else if (this.props.isSignedIn===null){
       return <button className="ui primary loading button">Loading</button>
      }
    }

    loginUser = () => {
      if (!this.props.userDetail.name && this.props.userDetail.email!=='' && this.props.userDetail.password!==''){
        //console.log(this.props.userDetail.email)
        fire.auth().signInWithEmailAndPassword(this.props.userDetail.email, this.props.userDetail.password).then((u)=>{
          if (this.props.signInModal){
            this.props.toggleSigningModal()
          }
        })
        
        .catch((error) => {
          console.log(error);
        });
      } 
      if (this.props.googleSignIn){
          
          fire.auth().signInWithRedirect(googleProvider);
      }
      if (this.props.facebookSignIn){
          console.log('reached')
          fire.auth().signInWithRedirect(facebookProvider);
      }
     
    }

    signUpUser = () => {

      if (this.props.userDetail.name!=='' && this.props.userDetail.email!=='' && this.props.userDetail.password!==''){
        fire.auth().createUserWithEmailAndPassword(this.props.userDetail.email, this.props.userDetail.password).then(()=>{
         
          var user = fire.auth().currentUser;
            
              user.updateProfile({
                displayName: this.props.userDetail.name
                
              }).then(()=>{
                this.authListener();
                  /**
                   ** create an user object with empty favourite and watched list
                   */
                  this.props.createUser(this.props.userDetail)

                if (this.props.signInModal){
                  this.props.toggleSigningModal()
                }
              })

        })
        .catch(function(error) {
          // Handle Errors here.
          //var errorCode = error.code;
          //var errorMessage = error.message;
          // ...
        });

      }

    }

    logout() {
      fire.auth().signOut();

    }

    render() {
        return (
            <div>
                {this.loginUser()}
                {this.signUpUser()}
                {this.renderLogInOutBtn()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
  return {
    
    userDetail: state.auth.userDetail,
    isSignedIn: state.auth.isSignedIn,
    googleSignIn:state.auth.googleSignInReq,
    facebookSignIn:state.auth.facebookSignInReq,
    signInModal:state.movies.modals.signingModal,
    user:state.auth.user
  }
}

export default connect(mapStateToProps,{ userSignedIn, userSignedOut, toggleSigningModal})(Auth);
