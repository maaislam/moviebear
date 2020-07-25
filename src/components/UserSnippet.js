import React from 'react';

const UserSnippet = (props) => {

    if(props.userImg){
        return (
        <div className="item">
            <img className="ui avatar image" src= {props.userImg} alt = "user"/>
            <div className="content">
                <div className="header">{props.name}</div>
            </div>
        </div>
        );
    
    } else {
        return (
            <div className="item">
                <i className="user circle blue large icon"></i>
                <div className="content">
                    <div className="header">{props.name}</div>
                </div>
            </div>
        );
    }

    
    
}

export default UserSnippet;
