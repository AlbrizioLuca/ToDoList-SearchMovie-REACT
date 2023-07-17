import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import CRUD from '../components/CRUD';

export default function DisplayCRUD() {
    const [param, setParam] = useState("users");
    const [fields, setFields] = useState([]);

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

    useEffect(() => {
        setFields(fieldsByParam[param]);
    }, [param]);

    return (
        <>
            <NavBar></NavBar>
            <h1>Bienvenue sur le tableau de bord de l'administrateur</h1>
            <br/>
            <select value={param} onChange={(e) => setParam(e.target.value)}>
                <option value="users">Utilisateurs</option>
                <option value="posts">Posts</option>
                <option value="comments">Commentaires</option>
            </select>
            <br/>
            <CRUD param={param} fields={fields}></CRUD>
        </>
    );
}






