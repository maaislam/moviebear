import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './MovieCard.css'

class MediaCard extends Component {

    img_base_Url = () => {
        return `https://image.tmdb.org/t/p/w500${this.props.poster_path}`
    }


    findGenre = () => {
        
                console.log(this.props.genreArr)
                return this.props.genreArr.map((item, index)=> {
                  const genre = this.props.fullGenreList.find(el => el.id===item);
                 return (
                     <span className ="comma" key = {index}>
                        {genre?(genre.name==='Science Fiction'?'SciFi':genre.name):''}
                     </span>
                 )  
                
            });
    }

    checkRating = () => {
        if (this.props.rating>=7){
            return "green"
        } else if (this.props.rating<=7 && this.props.rating>=5){
            return "orange"
        } else if (this.props.rating<5) {
            return "red"
        }
    }


    urlModifier = () => {
        return  this.props.title.replaceAll(' ', '-');
        
           

    }

    render() {
        return (
           
                <Link  to = {`/${this.props.clickedItem}/${this.props.media_id}/${this.urlModifier()}`} className="card media-card">
                    <div className="image ">
                        <img src={this.img_base_Url()} alt ={this.props.title}/>
                    </div>
                    <div><span className={`ui ${this.checkRating()} label rating`}><i className="star icon"></i>{this.props.rating}</span></div>
                    <div className="media-content">
                        
                        <h3>{this.props.title.substring(0,22)}</h3>
                       
                        <div className="date">Release Date: {this.props.release_date}</div>
                     
                        <div className=" genre">
                            {this.findGenre()}
                        </div>
                    </div>
                </Link>    
            
        
        );
    }
}

const mapStateToProps = (ownProps) => {
    const clickedItem = ownProps.movies.tvBtnClick?'tv':'movie'
    return {
        clickedItem
    }
}

export default connect(mapStateToProps)(MediaCard);
