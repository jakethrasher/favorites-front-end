import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Components/Header.js'
import FavoritesPage from './Components/FavoritesPage.js'
import SearchPage from './Components/SearchPage.js'
import HomePage from './Components/HomePage.js';
import SignUp from './AuthComponents/SignUp.js';
import Login from './AuthComponents/Login.js';
import { getToken } from './local-storage-utils.js';



export default class App extends Component {

state = {
  token: getToken(),
}

handleUserChange =(user)=>{
  this.setState({user: user.token})
  localStorage.setItem('TOKEN', JSON.stringify(user.token))
}

    render() {
        return (
            <div>
                <Router>
                  <Header/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => 
                            <SignUp handleUserChange={this.handleUserChange} {...routerProps} />} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) =>
                          <Login handleUserChange={this.handleUserChange} {...routerProps} />} 
                        />
                        <Route
                          path="/search" 
                          exact
                          render={(routerProps) =>
                          <SearchPage token={this.state.token} {...routerProps} />} 
                        />
                        <Route
                          path="/favorites" 
                          exact                  
                          render={(routerProps) =>
                          <FavoritesPage token={this.state.token} {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}