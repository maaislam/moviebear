

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import TvShow from './TvShow'
import SingleMediaDetail from './SingleMediaDetail'
import Header from './Header'
import LandingPage from './LandingPage';

//import fire from '../config/Fire';

class App extends Component {

    

    render() {
        
        return (
            <div className = "ui container" style = {{backgroundColor:'#4D4D4D'}}>
                <BrowserRouter>
                    <div  > 
                    <Header/>
                    <Switch>
                        <Route path = "/" exact component = {LandingPage}/>
                        <Route path = "/movie/:id/:slug" exact component = {SingleMediaDetail}/>
                        <Route path = "/tv/:id/:slug" exact component = {SingleMediaDetail}/>
                    </Switch>
                    </div>
                </BrowserRouter>
            </div>
            );
    }
}

export default App;
