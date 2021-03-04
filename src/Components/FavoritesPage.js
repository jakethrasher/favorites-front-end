import React, { Component } from 'react'
import { fetchFavorites } from '../api-utils'
import { getToken } from '../local-storage-utils'
import '../App.css'
export default class FavoritesPage extends Component {
    state = {
        favorites:[],
        token:getToken()
    }
    componentDidMount = async () =>{
        const favoritesData = await fetchFavorites(this.state.token)
        this.setState({favorites: favoritesData})
    }
    render() {
        return (
            <div className="movie-list">
                  {this.state.favorites.map(item=>
                    <div key={item.movie_db_id}>
                        <img src={`https://image.tmdb.org/t/p/w200${item.poster}`} alt={item.title}/>
                        <p><strong>{item.title}</strong></p>
                        <p><strong>Release Date: </strong>{item.year}</p>
                        <p><strong>User rating: </strong>{item.rating}%</p>
                        <p><strong>Synopsis: </strong>{item.overview}</p>
                    </div>    
                )}
            </div>
        )
    }
}
