
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { userSignedIn, userSignedOut, openSigningModal} from '../../actions'

import {fire, provider} from './Fire'



class Auth extends Component {


  componentDidMount(){

    this.authListener();
    
  }
 /* componentDidUpdate() {
    this.authListener();
  }*/

    authListener = () => {

    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user) 

        var signedUser = {
          name: user.displayName,
          userImg:user.photoURL
        }

      this.props.userSignedIn(signedUser);

           
          

        } else {
              // No user is signed in.

              this.props.userSignedOut();
              

            }
          });
        
    }

    renderLogInOutBtn = () => {

      if (this.props.isSignedIn){
        return(
          <button className = "ui red button" onClick = {this.logout}>
            Sign Out
          </button>
          )
      } else if (!this.props.isSignedIn) {
        return (
                <button className = "ui primary button" onClick = {this.props.openSigningModal}>
                    Sign In
                </button>
              )    
      }
    }

    loginUser = () => {
      if (this.props.userDetail){
        //console.log(this.props.userDetail.email)
        fire.auth().signInWithEmailAndPassword(this.props.userDetail.email, this.props.userDetail.password).then((u)=>{
        }).catch((error) => {
          //console.log(error);
        });
      } 
      if (this.props.googleSignIn){
          
          fire.auth().signInWithRedirect(provider)

          
      }
     
    }
    logout() {
      fire.auth().signOut();

    }

    render() {
        return (
            <div>
                {this.loginUser()}
                {this.renderLogInOutBtn()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
  return {
    
    userDetail: state.auth.userDetail,
    isSignedIn: state.auth.isSignedIn,
    googleSignIn:state.auth.googleSignInReq
  }
}

export default connect(mapStateToProps,{ userSignedIn, userSignedOut, openSigningModal})(Auth);
