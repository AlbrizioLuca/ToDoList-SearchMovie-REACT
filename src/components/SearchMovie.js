import React, { useState } from 'react';
import MovieDetails from './MovieDetails';

function SearchMovies() {
    const [title, setTitle] = useState(''); // Déclare une variable d'état pour le titre du film
    const [movies, setMovies] = useState([]); // Déclare une variable d'état pour les films trouvés
    const [selectedMovie, setSelectedMovie] = useState(null); // Déclare une variable d'état pour le film sélectionné

    // Fonction pour chercher les films par titre
    const searchMoviesByTitle = async (event) => {
        event.preventDefault(); // Empêche la page de se recharger lors de la soumission du formulaire

        const url = `http://www.omdbapi.com/?s=${title}&apikey=82419599`; // URL de l'API OMDB pour chercher les films par titre

        try {
            const res = await fetch(url); // Envoie une requête à l'API
            const data = await res.json(); // Convertit la réponse en JSON
            setMovies(data.Search); // Met à jour la variable d'état des films trouvés
        } catch (err) {
            console.error(err); // Affiche une erreur s'il y a un problème avec la requête
        }
    }

    // Fonction pour charger les détails d'un film
    const loadMovieDetails = async (id) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=82419599`; // URL de l'API OMDB pour chercher les détails d'un film
        try {
            const res = await fetch(url); // Envoie une requête à l'API
            const data = await res.json(); // Convertit la réponse en JSON
            setSelectedMovie(data); // Met à jour la variable d'état du film sélectionné
        } catch (err) {
            console.error(err); // Affiche une erreur s'il y a un problème avec la requête
        }
    }

    // Si un film est sélectionné, affiche les détails du film
    if (selectedMovie) {
        return <MovieDetails movie={selectedMovie} />
    }

    // Sinon, affiche le formulaire de recherche et les résultats de la recherche
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