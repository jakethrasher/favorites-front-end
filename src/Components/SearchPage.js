import React, { Component } from 'react'
import { createFavorite, getData } from '../api-utils'
import '../App.css'
import MovieList from './MovieList.js'
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
    handleClickFavorite = async(item)=>{
        await createFavorite(item, this.props.token)
    }
    render() {
        return (
            <div className="main">
                <div className="movie-list">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h1>Search Movies By Name</h1>
                        <input onChange={this.handleSearchChange} value={this.state.query}/>
                        <button>search</button>
                    </form>
                    <MovieList movies={this.state.movies} handleClickFavorite={this.handleClickFavorite}/>
                </div>
            </div>
        )
    }
}
