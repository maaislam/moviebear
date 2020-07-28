
import React, { Component } from 'react';
import { connect } from 'react-redux';

import MediaList from './MediaList'
import {  getCurrentUserFavs  } from '../actions'

class FavList extends Component {


    componentDidMount() {
       if (this.props.isSignedIn && this.props.user){
           this.props.getCurrentUserFavs(this.props.user.userId)
       }
        
            
        
    }

    componentDidUpdate(prevProps) {

        if(this.props.isSignedIn && prevProps.isSignedIn===null){
            this.props.getCurrentUserFavs(this.props.user.userId) 
        }
    }
    


    renderList = () => {

        var { isSignedIn, user, allFavourite  } = this.props

        if (isSignedIn && user ) {

           const fav_movie =  allFavourite.filter((el)=>{
                
               return el.mediaType ==='movie'

            })
           const fav_tv =  allFavourite.filter((el)=>{
                
               return el.mediaType ==='tv'

            })
        
            
       

            return (
                <div className = "ui container" style = {{paddingTop:'4rem'}}>
                
                   <MediaList 
                    heading = "Your Favourite Movies"
                    mediaList = {fav_movie}
                    fullGenreList = {this.props.fullGenreList}/>
                    <hr/>
                    <MediaList 
                    heading = "Your Favourite TV Shows"
                    mediaList = {fav_tv}
                    fullGenreList = {this.props.fullGenreList}/>
                    
                </div>
            );
        } else if (isSignedIn===null){
            return (
                <div style = {{paddingTop:'14rem'}}> 
                    <div className="ui active dimmer">
                        <div className="ui indeterminate text loader">Checking Sign In Status</div>
                    </div>                  
                </div>
            )
        } else {
            return (
                <div className = "ui segment" style = {{paddingTop:'14rem'}} > 
                    
                    <div>
                        <div className="ui header center aligned">Please Sign In for Favourites</div>
                    </div>                  
                </div>
            )
        }
    }



    render() {
        return (
            <div >
                {this.renderList()}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        isSignedIn: state.auth.isSignedIn,
        user:state.auth.user,
        allFavourite:state.favourite.allFavourite,
        fullGenreList: state.movies.fullGenreList
    }
}



export default connect(mapStateToProps,{getCurrentUserFavs})(FavList);
