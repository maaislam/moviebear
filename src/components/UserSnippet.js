import React from 'react';

const UserSnippet = (props) => {
    return (
        <div className="item">
            <img className="ui avatar image" src= {props.userImg} alt = "user"/>
            <div className="content">
                <div className="header">{props.name}</div>
            </div>
        </div>
    );
}

export default UserSnippet;
