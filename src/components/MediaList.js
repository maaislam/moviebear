import React, { Component } from 'react';


import MediaCard from './MediaCard';
import './MediaList.css'


class MediaList extends Component {


    nameTypeSelector = (el) => {
            if (el.original_title){
                return el.original_title;
            }
             else if (el.original_name){
                return el.original_name;
            }
            else if (el.tv_name && el.name){
                
                return el.tv_name;
            }
            else if (el.movie_title && el.name){
                
                return el.movie_title;
            }

        }
    

    renderItem = () => {

        const { mediaList, fullGenreList} = this.props

        if ( mediaList && fullGenreList ){
            return  mediaList.map(( mediaListItem,index) => {
                return (
                    <MediaCard 
                        key = {index}
                        media_id = {mediaListItem.id && mediaListItem.mediaId?mediaListItem.mediaId:mediaListItem.id}
                        mediaType = {mediaListItem.mediaType}
                        title = {this.nameTypeSelector(mediaListItem)}
                        poster_path = {mediaListItem.poster_path}
                        release_date = {mediaListItem.release_date?mediaListItem.release_date:mediaListItem.first_air_date}
                        genreArr = {mediaListItem.genre_ids?mediaListItem.genre_ids : mediaListItem.genres}
                        rating = {mediaListItem.vote_average}
                        fullGenreList = {fullGenreList}
                        />
                )
            });
        }
    }

    render() {
        return (
            <div className = "list-type">
                <div className = "heading ui red ribbon label ">
                <h4>{this.props.heading}</h4>
                </div>
                <div className = "ui link cards media-list">
                    
                    {this.renderItem()}
                </div>
            </div>
        );
    }
}

export default MediaList ;
