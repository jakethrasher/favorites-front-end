import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default class Header extends Component {
    render() {
        const main = {
            display: 'flex',
            alignItems: 'center',
            justifyContent:'flex-end',
            paddingTop:'5px',
            backgroundColor: 'black',
            height: '4em',
        }
        return (
            <div style={ main }>
                <div className="link-container">
                    <NavLink to='/'>Home Page</NavLink>
                    <NavLink to='/signup'>Sign Up</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/search'>Search</NavLink>
                    <NavLink to='/favorites'>Favorites</NavLink>
                </div>
            </div>
        )
    }
}
               