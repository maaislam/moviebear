

import React from 'react'

const SocialLogIn = (props) => {
    return (
        <div className = "content" style = {{padding:'0 2.0rem'}}>
            <div className="ui one column grid center aligned">
                <div className="row" >
                    <button onClick = {props.googleSignInRequest} className=" fluid ui button google plus"><i className="google icon"></i>Log in with Google</button>
                </div>
                <div className="row">
                    <button onClick = {props.facebookSignInRequest} className="fluid ui button facebook"><i className="facebook icon"></i>Log in with Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default SocialLogIn