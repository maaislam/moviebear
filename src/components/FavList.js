
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {  getCurrentUserFavs  } from '../actions'

class FavList extends Component {


    componentDidMount() {
        if (this.props.isSignedIn && this.props.user.userId){
            this.props.getCurrentUserFavs(this.props.user.userId)
        }
    }





    renderList = () => {
        if (this.props.isSignedIn) {
            return (
                <div className="ui header inverted">
                    <h1>user fav lsit</h1>
                    
                    <h3>Work in progress</h3>
                    <h3>Work in progress</h3>
                    <h3>Work in progress</h3>
                    <h3>Work in progress</h3>
                    <h3>Work in progress</h3>
                    
                </div>
            );
        } else {
            return (
                <div className="ui header inverted">
                    <h1>hahah! Nice Try but Please Log In First</h1>
                    <h1>hahah! Nice Try but Please Log In First</h1>
                    <h1>hahah! Nice Try but Please Log In First</h1>
                    <h1>hahah! Nice Try but Please Log In First</h1>
                    <h1>hahah! Nice Try but Please Log In First</h1>
                </div>
            )
        }
    }



    render() {
        return (
            <div>
                {this.renderList()}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth.user.userId)
    return {
        isSignedIn: state.auth.isSignedIn,
        user:state.auth.user
    }
}



export default connect(mapStateToProps,{getCurrentUserFavs})(FavList);
