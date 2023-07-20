import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import CRUD from '../components/CRUD';

const fieldsByParam = {
    users: [
        { name: 'name', label: 'Nom' },
        { name: 'username', label: 'Pseudo' },
        { name: 'email', label: 'Email' },
        { name: 'phone', label: 'Telephone' },
        { name: 'website', label: 'Site Web' }
    ],
    posts: [
        { name: 'userId', label: 'Num User' },
        { name: 'title', label: 'Titre' },
        { name: 'body', label: 'Contenu' }
    ],
    comments: [
        { name: 'postId', label: 'Num du Post' },
        { name: 'name', label: 'Nom' },
        { name: 'email', label: 'Email' },
        { name: 'body', label: 'Contenu' }
    ],
};

export default function DisplayCRUD() {
    const [param, setParam] = useState(Object.keys(fieldsByParam)?.[0] ?? "");
    const fields = fieldsByParam?.[param] ?? [];

    return (
        <>
            <NavBar></NavBar>
            <h1>Bienvenue sur le tableau de bord de l'administrateur</h1>
            <CRUD param={param} fields={fields} setParam={setParam}></CRUD>
        </>
    );
}






