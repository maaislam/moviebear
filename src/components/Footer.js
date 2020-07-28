import React from 'react';
import {  Link  } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="ui inverted vertical footer segment" style = {{padding:'3rem 0', marginTop:'5rem'}}>
            <div className="ui grid container">
                <>
                    <div className="four wide column">
                        <Link to = "/" className="item" style = {{display:'flex'}}>
                            <i className = "big white film icon"/>
                            <div className="ui inverted header">
                                <h4 style = {{marginTop:'-1.5rem'}}>Moviebear</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="three wide column">
                        <a href="https://github.com/maaislam/moviebear" style = {{display:'flex'}}>
                            <i className = "big github square icon"></i>
                            <div className="ui inverted header">
                                <h4 style = {{marginTop:'-1.5rem'}}>Github</h4>
                            </div>
                        </a>
                    </div>
                    <div className="five wide column">Copyright <i className = "copyright outline blue icon"></i> 2020 Arafat Islam</div>
                    <div className="four wide column">Powered By: <a href="https://www.themoviedb.org/">TMDB API</a></div>
                </>
            </div>
        </div>
    );
}

export default Footer;
