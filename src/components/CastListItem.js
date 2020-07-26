import React from 'react';

const CastListItem = (props) => {
   
    return (
        <div className="fluid card">
        <div className="image">
          <img src={`https://image.tmdb.org/t/p/w300${props.castImage}`}  alt = {props.castName}/>
        </div>
        <div className="content">
          <div className="header"><h3>{props.castName}</h3></div>
          <div className="description">
            {props.character}
          </div>
        </div>
      </div>
    );
}

export default CastListItem;
