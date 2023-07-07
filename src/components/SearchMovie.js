import React, { useState } from 'react';
import MovieDetails from './MovieDetails';

const SearchMovies = () => {
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const searchMoviesByTitle = async (event) => {
        event.preventDefault();

        const url = `http://www.omdbapi.com/?s=${title}&apikey=82419599`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.Search);
        } catch (err) {
            console.error(err);
        }
    }

    const loadMovieDetails = async (id) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=82419599`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setSelectedMovie(data);
        } catch (err) {
            console.error(err);
        }
    }

    if (selectedMovie) {
        return <MovieDetails movie={selectedMovie} />
    }

    return (
        <div>
            <form onSubmit={searchMoviesByTitle}>
                <input
                    type="text"
                    name="title"
                    placeholder="exemple: Gladiator"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <button type="submit">Rechercher le film par titre</button>
            </form>

            {movies && movies.map(movie => (
                <img key={movie.imdbID}
                    src={movie.Poster}
                    alt={movie.Title}
                    onClick={() => loadMovieDetails(movie.imdbID)}
                />
            ))}
        </div>
    );
}

export default SearchMovies;