import React, { Component } from 'react';
import { connect } from 'react-redux'

import {  fetchSingleMedia, fetchCredit, openTrailerModal, fetchVideo, createFavourite,toggleSigningModal, getAllFavourite,favBtnClick, deleteFav,setFavourite, clearFavourite  } from '../actions'
import './SingleMediaDetail.css'
import TrailerModal from './TrailerModal';
import CastList from './CastList'

class SingleMediaDetail extends Component {


    componentDidMount() {
        const media_type =  this.props.match.path ==="/movie/:id/:slug"?"movie":"tv"
         
        this.props.fetchSingleMedia(media_type, this.props.match.params.id)
        this.props.fetchCredit(media_type, this.props.match.params.id)
        this.props.fetchVideo(media_type, this.props.match.params.id)
        this.props.getAllFavourite()
        window.scrollTo(0, 0);
        
    }

    componentDidUpdate(prevState){
        this.checkIfAlreadyLiked()
        if(!this.props.isSignedIn && prevState.isSignedIn){
            this.props.clearFavourite()
        }
    }


    componentWillUnmount(){
        this.props.clearFavourite()
    }

    checkIfAlreadyLiked = () => {

        if( this.props.allFavourite.length>0  
            && 
            this.props.isSignedIn
            &&
            this.props.allFavourite.some( each => each.mediaId===this.props.mediaDetail.id && each.userId===this.props.signedUserId))
        {
            console.log('working')
          this.props.setFavourite()  
        }
    }


    img_base_Url = () => {
        return `https://image.tmdb.org/t/p/w500${this.props.mediaDetail.poster_path}`
    }
        
    backdropUrl = () => {
        return `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this.props.mediaDetail.backdrop_path}`
    }

    releaseYear = () => {
        const x = this.props.mediaDetail.release_date?this.props.mediaDetail.release_date:this.props.mediaDetail.first_air_date;
            if(x){
            return (x.substring(0, 4)) 
            }
            
        }

    checkRating = () => {

        var rating = this.props.mediaDetail.vote_average

        if (rating>=7){
                return "green"
            } else if (rating<=7 && rating>=5){
                return "orange"
            } else if (rating<5) {
                return "red"
            }
        };    

    findGenre = () => {
        
        if (this.props.mediaDetail.genres){
            return this.props.mediaDetail.genres.map((item,index)=> {
                    
                return (
                    <span className="item" key= {index}>
                        {item.name}
                    </span>
                )
            });
        }
         
    };

    retreiveTitle = () => {
        if (this.props.mediaDetail.title){
            return this.props.mediaDetail.title;
        }else {
            return this.props.mediaDetail.original_name; 
        }
    }

    showTrailer = () => {
        
        if (this.props.modal){
            return (
                <TrailerModal 
                    closeModal = {this.props.openTrailerModal}
                    content = {this.renderIframe()}
                    />
            )
        } else {
            return null
        }
    }

    renderIframe = () => {
        
        return (
            
            <iframe title = "trailer" width="950" height="540" src={`https://www.youtube.com/embed/${this.props.trailer[0].key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        )
    }

    addFavourite =() => {

        if (this.props.isSignedIn){
            
            const media_type =  this.props.match.path ==="/movie/:id/:slug"?"movie":"tv";
            
            const userFav = {
                mediaType:media_type,
                mediaId:this.props.mediaDetail.id
            }
            
           if( this.props.allFavourite  
                && 
                this.props.allFavourite.some( each => each.mediaId===userFav.mediaId && each.userId===this.props.signedUserId))//*delete if already liked
                {
                 console.log('present')
                 //*find index of the item to delete
                 const index =  this.props.allFavourite.findIndex(each => each.mediaId===userFav.mediaId && each.userId===this.props.signedUserId);
                 
                 const id = this.props.allFavourite[index].id
                 this.props.deleteFav(id,index)
                } else 
                {
                this.props.createFavourite(userFav)//*add to like if not aleady liked
                }   


            }else if (!this.props.isSignedIn) {
                this.props.toggleSigningModal()
            }
            
    }


    render() {
        return (
            <div style = {{marginTop:'3rem'}}>
                {this.showTrailer()}
                <div className="detail" 
                    style ={{backgroundImage:`linear-gradient(to right bottom, rgba(50, 50, 50, 0.8),rgba(35, 35, 35, 0.8)),url(${this.backdropUrl()})`}}>
                    <div className="poster"><img src={this.img_base_Url()} alt={this.retreiveTitle()}/></div>
                    <div className="more_detail">
                        <h1>{this.retreiveTitle()} ({this.releaseYear()})</h1>
                        <div className = "meta-data">
                            <div className="ui horizontal list">
                               {this.findGenre()} 
                            </div>
                        </div>
                        <div className="control-items">
                            <div className = {`ui ${this.checkRating()} label`}>
                                <h4>{this.props.mediaDetail.vote_average}</h4>
                            </div>
                            <button onClick={this.props.openTrailerModal} className = "ui inverted red  button"><i className="play icon"></i>Play Trailer</button>
                            <button 
                                onClick ={this.addFavourite} 
                                className = {`ui ${this.props.isFavourite?'':'inverted'} orange toggle button`}>
                                <i className="heart icon"/>{`${this.props.isFavourite?'Added':'Add'} to Favourite`}
                            </button>
                            
                        </div>
                        <div>
                            <h2>Overview</h2>
                            <p>{this.props.mediaDetail.overview}</p>
                        </div>
                    </div>
                </div>
                <>
                    <CastList 
                        castList = {this.props.castList}
                    />
                </>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
       
    
    return {
        mediaTypeMovie:state.movies.movieBtnClick,
        mediaDetail:state.movies.singleMedia,
        castList: state.movies.castList,
        modal:state.movies.modals.trailerModal,
        trailer:state.movies.trailer,
        user:state.auth.user,
        isSignedIn:state.auth.isSignedIn,
        allFavourite:state.favourite.allFavourite,
        favBtnClicked: state.favourite.favBtnClicked,
        signedUserId:state.auth.user.userId,
        isFavourite:state.favourite.isFavourite
    }
}

export default connect(mapStateToProps, {fetchSingleMedia, fetchCredit, openTrailerModal, fetchVideo, createFavourite, toggleSigningModal, getAllFavourite,favBtnClick, deleteFav,setFavourite, clearFavourite})(SingleMediaDetail);
