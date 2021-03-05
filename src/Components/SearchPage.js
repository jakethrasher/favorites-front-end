import React, { Component } from 'react'
import { createFavorite, fetchFavorites, getData } from '../api-utils'
import '../App.css'
import MovieList from './MovieList.js'
export default class SearchPage extends Component {
    state={
        movies:[],
        query:'',
        favorites:[]
    }
    componentDidMount = async ()=>{
        const favorites = await fetchFavorites(this.props.token)
        this.setState({favorites: favorites})
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
        await createFavorite(item, this.props.token);
        const favorites = await fetchFavorites(this.props.token)
        this.setState({favorites: favorites})
    }
    
    render() {
        console.log(this.state.favorites)
        return (
            <div className="main">
                <div className="movie-list">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h1>Search Movies By Name</h1>
                        <input onChange={this.handleSearchChange} value={this.state.query}/>
                        <button>search</button>
                    </form>
                    <MovieList movies={this.state.movies} handleClickFavorite={this.handleClickFavorite} favorites={this.state.favorites}/>
                </div>
            </div>
        )
    }
}
