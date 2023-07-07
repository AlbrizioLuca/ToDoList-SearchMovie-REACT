import React from 'react';

export default function DisplayPost({id, title, body}){
    return (
        <>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
        </>
    )
}

// transformer ce composant pour qu'il accepte : 
//     - une URL variable (passée comme prop du composant)
//     - des options de requete de l'API (ex : ?_limit=10)
//     - le nom du composant spécifique qui servira à l'affichage des données (ex : DisplayPosts ou DisplayUsers ... )