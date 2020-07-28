

import React, { Component } from 'react';
import {Router, Route, Switch } from 'react-router-dom'

//import TvShow from './TvShow'
import SingleMediaDetail from './SingleMediaDetail'
import Header from './Header'
import LandingPage from './LandingPage';
import FavList from './FavList'
import history from '../history'

class App extends Component {

    
    
    render() {
        
        return (
            <div style = {{backgroundColor:'#1A202C'}}>
                <Router history = {history}>
                    <> 
                    <Header />
                    <Switch>
                        <Route path = "/" exact component = {LandingPage}/>
                        <Route path = "/movie/:id/:slug" exact component = {SingleMediaDetail}/>
                        <Route path = "/tv/:id/:slug" exact component = {SingleMediaDetail}/>
                        <Route path = "/favourites" exact component = {FavList}/>
                    </Switch>
                    </>
                </Router>
                
            </div>
            );
    }
}

export default App;
