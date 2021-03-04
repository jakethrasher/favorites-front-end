import React, { Component } from 'react'
// import '../App.css'
export default class MovieList extends Component {
    render() {
        return (
            <div>
                {this.props.movies.map(item=>
                    <div key={item.movie_db_id}>
                        <img src={`https://image.tmdb.org/t/p/w200${item.poster}`} alt={item.title}/>
                        <p>{item.title}</p>
                        <p>Release Date: {item.year}</p>
                        <p>User rating: {item.rating}%</p>
                        <p>Synopsis: {item.overview}</p>
                    </div>    
                )}
            </div>
        )
    }
}
