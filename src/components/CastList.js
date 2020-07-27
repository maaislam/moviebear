import React, { Component } from 'react';
import CastListItem from './CastListItem'

import './CastList.css'

class CastList extends Component {


    

    renderList = () => {
        return this.props.castList.slice(0, 10).map((castListItem, index) => {
            return (
                <CastListItem
                    castName = {castListItem.name}
                    character = {castListItem.character}
                    castImage = {castListItem.profile_path}
                    key = {index}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <div className="ui inverted header cast">
                    <h2>Top Billed Cast</h2>
                </div>
                <div className = "ui link cards castList">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default CastList;
