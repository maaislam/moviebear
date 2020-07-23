import React, { Component } from 'react';
import { connect } from 'react-redux'

import {  fetchSingleMedia, fetchCredit  } from '../actions'
import './MediaDetail.css'

class MovieDetail extends Component {


    	componentDidMount() {
          const media_type =  this.props.mediaTypeMovie?"movie":"tv"
            
          this.props.fetchSingleMedia(media_type, this.props.match.params.id)
          this.props.fetchCredit(media_type, this.props.match.params.id)
            
        }

        img_base_Url = () => {
            return `https://image.tmdb.org/t/p/w500${this.props.mediaDetail.poster_path}`
        }
        
        backdropUrl = () => {
            return `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this.props.mediaDetail.backdrop_path}`
        }
        releaseYear = () => {
            const x = this.props.mediaDetail.release_date;
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

    render() {
        return (
            <div style = {{marginTop:'5rem'}}>
                <div className="detail" 
                    style ={{backgroundImage:`linear-gradient(to right bottom, rgba(70, 70, 70, 0.8),rgba(35, 35, 35, 0.8)),url(${this.backdropUrl()})`}}>
                    <div className="poster"><img src={this.img_base_Url()} alt={this.props.mediaDetail.title}/></div>
                    <div className="more_detail">
                        <h1>{this.props.mediaDetail.title} ({this.releaseYear()})</h1>
                        <div className = "meta-data">
                            <div className="ui horizontal list">
                               {this.findGenre()} 
                            </div>
                        </div>
                        <div className="control-items">
                            <div className = {`ui ${this.checkRating()} label`}>
                                <h4>{this.props.mediaDetail.vote_average}</h4>
                            </div>
                            <button className = "ui inverted red button"><i class="play icon"></i>Play Trailer</button>
                            <button className = "ui inverted red button"><i class="play icon"></i>Play Trailer</button>
                            <button className = "ui inverted red button"><i class="play icon"></i>Play Trailer</button>
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
    }
}

export default connect(mapStateToProps, {fetchSingleMedia, fetchCredit})(MovieDetail);
