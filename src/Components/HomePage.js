import React, { Component } from 'react'
import { serialize } from 'superagent'

export default class HomePage extends Component {
    render() {
        const home={
            fontSize:'3em',
            display: 'flex',
            flexWrap:'wrap'
        } 
        const text={
            margin:'0 auto'
        }
        return (
            <div>
                <div style={home}>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                    <h1 style={text}>HOMEPAGE</h1>
                </div>
            </div>
        )
    }
}
                    
                   
