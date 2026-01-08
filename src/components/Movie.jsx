import React from 'react';
import './Movie.css'

const Movie = (Props) => {
    const ShowMovie = () => {
        Props.onMovieClick(Props.id);
    }
    return (
        <>
            <div className='container'>
                <div onClick={ShowMovie} className="Card-movie">
                    <img src={`${Props.image}`} />
                    <p>episode: {Props.episode}</p>
                    <h3>{Props.movieName}</h3>
                    <img src='../asset/Rectangle 3.png' />
                </div>
            </div>
        </>
    );
}
export default Movie;