import React from 'react';

const MovieDetails = ({ movie }) => {
    // convertir le score IMDb (sur 10) en score sur 5
    const rating = Math.round(movie.imdbRating / 2);
    // créer un tableau de stars
    const stars = Array(rating).fill(0).map((_, i) => <span key={i}>⭐</span>);

    return (
        <>
        <button onClick={() => window.location.reload(false)}>Revenir à la recherche de film</button>
        <div>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title} ({movie.Year})</h2>
            <p>{movie.Runtime}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Actors}</p>
            <p>{movie.Plot}</p>
            <p>{stars}</p>
            <p>{movie.BoxOffice}</p>
        </div>
        </>
    );
};

export default MovieDetails;