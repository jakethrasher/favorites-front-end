import React, { Component } from 'react'
import { getData } from '../api-utils'
import '../App.css'

export default class SearchPage extends Component {
    state={
        movies:[],
        query:'',
    }
    handleSearchChange=(e)=>{
        this.setState({query:e.target.value})
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const data = await getData(this.props.token, this.state.query)
        this.setState({movies: data})
        
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1>Search Movies By Name</h1>
                    <input onChange={this.handleSearchChange} value={this.state.query}/>
                    <button>search</button>
                </form>
            </div>
        )
    }
}
