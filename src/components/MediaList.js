import React, { Component } from 'react';


import MediaCard from './MediaCard';
import './MediaList.css'


class MediaList extends Component {


    renderItem = () => {

        const { mediaList, fullGenreList} = this.props

        if ( mediaList && fullGenreList ){
            return  mediaList.map(( mediaListItem) => {
                return (
                    <MediaCard 
                        key = {mediaListItem.id}
                        media_id = {mediaListItem.id}
                        title = {mediaListItem.title?mediaListItem.title:mediaListItem.name}
                        poster_path = {mediaListItem.poster_path}
                        release_date = {mediaListItem.release_date?mediaListItem.release_date:mediaListItem.first_air_date}
                        genreArr = {mediaListItem.genre_ids}
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
