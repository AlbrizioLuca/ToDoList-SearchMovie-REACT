import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState('');

    // Récupère les éléments stockés dans le localStorage lors du chargement de la page
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items'));
        if (storedItems) {
            setItems(storedItems);
        }
    }, []);

    // Stocke les éléments dans le localStorage à chaque modification de la liste
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    // Ajoute un nouvel élément à la liste
    const addItem = newItem => {
        if (!items.some(item => item.text === newItem)) {
            setItems([...items, { text: newItem, checked: false }]);
        } else {
            alert("Cet élément est déjà présent dans la liste.");
        }
    };

    // Bascule l'état de l'élément sélectionné entre coché et non coché
    const toggleItem = itemText => {
        setItems(items.map(item => {
            if (item.text === itemText) {
                return { ...item, checked: !item.checked };
            } else {
                return item;
            }
        }));
    };

    // Supprime tous les éléments cochés de la liste
    const deleteCheckedItems = () => {
        setItems(items.filter(item => !item.checked));
    };

    // Ajoute un nouvel élément à la liste lors de la soumission du formulaire
    const handleSubmit = event => {
        event.preventDefault();
        const newItem = currentItem.trim();
        if (newItem !== '') {
            addItem(newItem);
            setCurrentItem('');
        }
    };

    // Affiche la liste des éléments à faire avec des cases à cocher et un bouton pour supprimer les éléments cochés
    return (
        <div>
            <h3>Liste de choses à faire</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ajouter un élément"
                    value={currentItem}
                    onChange={event => setCurrentItem(event.target.value)}
                />
                <button type="submit">Ajouter</button>
            </form>
            <ul>
                {items.map(item => (
                    <li key={item.text}>
                        <input
                            type="checkbox"
                            id={item.text}
                            name={item.text}
                            value={item.text}
                            checked={item.checked}
                            onChange={() => toggleItem(item.text)}
                        />
                        <label htmlFor={item.text} style={{ textDecoration: item.checked ? "line-through" : "none" }}>
                            {item.text}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={deleteCheckedItems}>Effacer les éléments cochés</button>
        </div>
    );
};

export default TodoList;