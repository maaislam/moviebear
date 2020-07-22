import React, { Component } from 'react';
import { connect } from 'react-redux'

import {  fetchSingleMedia, fetchCredit  } from '../actions'

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
    
    render() {
        return (
            <div style = {{marginTop:'5rem'}}>
                <div className="detail" 
                    style ={{backgroundImage:`linear-gradient(to right bottom, rgba(126, 213, 111, 0.8),rgba(40, 180, 131, 0.8)),url(${this.backdropUrl()})`}}>
                    <div className="poster"><img src={this.img_base_Url()} alt={this.props.mediaDetail.title}/></div>
                    <div className="more_detail">
                        <h1>{this.props.mediaDetail.title}</h1>
                        <div>
                            <span>release date</span>
                            <span>genre</span>
                        </div>
                        <div><h4>rating</h4></div>
                        <div>
                            <h3>Overview</h3>
                            <p>description</p>
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
