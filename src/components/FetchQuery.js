import { useState, useEffect } from 'react';
import DisplayPost from '../components/DisplayPost';


export default function FetchQuery() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            //traitement des données (requete fetch)
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("l'API ne répond pas !")
                    }
                    return response.json()
                })
                .then((actualData) => {
                    setData(actualData)
                    console.log(actualData)
                })
                .catch((err) => {
                    setError(err.message)
                    console.log(err.message);
                })
                .finally(() => {
                    setLoading(false)
                })
        },
        //tableau des dependances eventuelles (qui declenchent l'effet)
        []
    )

    return (
        <div>
            {loading && <div>Données en chargement, veuillez patienter..</div>}
            {error && <div>Erreur: {error}</div>}
            {data && data.map(({ id, title, body }) => (
                <DisplayPost id={id} title={title} body={body} />
                )
            )}
        </div>
    );
}

