import React, { Component } from 'react'
// import '../App.css'
export default class MovieList extends Component {
    render() {
        return (
            <div>
                {this.props.movies.map(item=>
                    <div key={item.movie_db_id}>
                        <img src={`https://image.tmdb.org/t/p/w200${item.poster}`} alt={item.title}/>
                        <button onClick={()=>this.props.handleClickFavorite(item)}className="favorite-button">Add To Favorites</button>
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
