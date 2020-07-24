
import React, { Component } from 'react';
import { connect } from 'react-redux'

import fire from './Fire'



class Auth extends Component {




    authListener = () => {

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
              // User is signed in.
            } else {
              // No user is signed in.
            }
          });
          

    }

    loginUser = () => {
      if (this.props.userDetail){

        fire.auth().signInWithEmailAndPassword(this.props.userDetail.email, this.props.userDetail.password).then((u)=>{
        }).catch((error) => {
          console.log(error);
        });
      }
     
    }
    

    render() {
        return (
            <div>
                {this.loginUser()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
  return {
    
    userDetail: state.auth.userDetail
  }
}

export default connect(mapStateToProps,{})(Auth);
