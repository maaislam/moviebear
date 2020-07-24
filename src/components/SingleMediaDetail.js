import React, { Component } from 'react';
import { connect } from 'react-redux'

import {  fetchSingleMedia, fetchCredit, openTrailerModal, fetchVideo  } from '../actions'
import './SingleMediaDetail.css'
import TrailerModal from './TrailerModal';

class SingleMediaDetail extends Component {


    componentDidMount() {
        const media_type =  this.props.match.path ==="/movie/:id/:slug"?"movie":"tv"
         
        this.props.fetchSingleMedia(media_type, this.props.match.params.id)
        this.props.fetchCredit(media_type, this.props.match.params.id)
        this.props.fetchVideo(media_type, this.props.match.params.id)
            
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
        //console.log(this.props.trailerId[0].key)
        return (
            
            <iframe title = "trailer" width="950" height="540" src={`https://www.youtube.com/embed/${this.props.trailer[0].key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        )
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
                            <button onClick={this.props.openTrailerModal} className = "ui inverted red button"><i className="play icon"></i>Play Trailer</button>
                            
                        </div>
                        <div>
                            <h2>Overview</h2>
                            <p>{this.props.mediaDetail.overview}</p>
                        </div>
                    </div>
                </div>
                <div className="cast"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        mediaTypeMovie:state.movies.movieBtnClick,
        mediaDetail:state.movies.singleMedia,
        cast:state.movies.cast,
        modal:state.movies.modals.trailerModal,
        trailer:state.movies.trailer
    }
}

export default connect(mapStateToProps, {fetchSingleMedia, fetchCredit, openTrailerModal, fetchVideo})(SingleMediaDetail);
