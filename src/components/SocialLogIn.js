

import React from 'react'

const SocialLogIn = (props) => {
    return (
        <div className = "content" style = {{padding:'0 4rem'}}>
            <div className="ui one column grid center aligned">
                <div className="row" >
                    <button onClick = {props.googleSignInRequest} className=" fluid ui button google plus"><i class="google icon"></i>Log in with Google</button>
                </div>
                <div className="row">
                    <button onClick = {props.facebookSignInRequest} className="fluid ui button facebook"><i class="facebook icon"></i>Log in with Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default SocialLogIn