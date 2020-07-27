import React from 'react';

const UserSnippet = (props) => {

    if(props.userImg){
        return (
        <div className="item">
            <img className="ui avatar mini image" src= {props.userImg} alt = "user"/>
            <div className="content">
                <div className="header"><h5>{props.name}</h5></div>
            </div>
        </div>
        );
    
    } else {
        return (
            
            <div className="item">
                <i className="user circle blue large icon"></i>
                <div className="content">
                    <div className="header"><h5>{props.name}</h5></div>
                </div>
            </div>
        );
    }

    
    
}

export default UserSnippet;
