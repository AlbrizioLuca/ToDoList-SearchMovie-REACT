import { useState } from "react";

// Composant qui affiche un texte avec l'option "Afficher plus" pour dévoiler le texte complet
export default function DisplayText({ text, maxLength }) {

    // Utilise le hook useState pour initialiser l'état de hidden à true
    const [hidden, setHidden] = useState(true);

    // Vérifie si la longueur du texte est inférieure ou égale à maxLength
    if (text.length <= maxLength) {
        return <span>{text}</span>
    }

    // Initialise la variable url
    let url = '';

    // Récupère les premiers maxLength caractères du texte et supprime les espaces inutiles
    const hiddenText = text.substr(0, maxLength).trim();

    // Divise le texte en plusieurs lignes et les affiche dans des balises <span> avec un saut de ligne <br />
    const fullText = text.split("\n").map((item) => {
        return (
            <span>
                {item}
                <br />
            </span>
        );
    });

    if (hidden) {
        // Si le texte est caché, affiche seulement les maxLength premiers caractères et un bouton "Afficher plus"
        return (
            <span className="resume">
                {hiddenText}... {/* Affiche les maxLength premiers caractères */}
                <a href={url} onClick={(event) => {
                    event.preventDefault();
                    setHidden(false) // Affiche le texte complet en changeant la valeur de hidden
                }}>Afficher plus</a> {/* Bouton pour afficher le texte complet */}
            </span>
        );
    } else {
        // Si le texte est dévoilé, affiche le texte complet et un bouton "Afficher moins"
        return (
            <span className="resume">
                {fullText} {/* Affiche le texte complet */}
                <a href={url} onClick={(event) => {
                    event.preventDefault();
                    setHidden(true) // Cache le texte complet en changeant la valeur de hidden
                }}>Afficher moins</a> {/* Bouton pour cacher le texte complet */}
            </span>
        );
    }
}