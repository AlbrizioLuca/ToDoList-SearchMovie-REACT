import NavBar from'../components/NavBar';
import ResumeReact from '../components/ResumeReact';
export default function DisplayText(){
    const mytext = "React est une bibliothèque JavaScript libre développée par Facebook (maintenant Meta) depuis 2013. \n Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état. \n C'est une bibliothèque qui ne gère que l'interface de l'application, considéré comme la vue dans le modèle MVC. \n Elle peut ainsi être utilisée avec une autre bibliothèque ou un framework MVC comme AngularJS. \n La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un DOM virtuel et en ne mettant à jour le rendu dans le navigateur qu'en cas de nécessité. \n La bibliothèque est utilisée par Netflix (depuis le 25 octobre 2017, une migration de la partie client vers du JavaScript pur a permis d'augmenter les performances de 50%), Yahoo, Airbnb, Sony, Atlassian ainsi que par les équipes de Meta, pratiquant l'autoéquipement sur les réseaux sociaux Facebook, Instagram ou encore WhatsApp. \n À la fin de 2015, WordPress.com annonce Gutenberg, une interface pour les éditeurs de sites WordPress, développée en JavaScript avec Node.js et React";

    return(
        <>
            <NavBar />
            <h1>Informations sur le framework</h1>
            <ResumeReact text ={mytext} maxLength={68}/>
        </>
    ) 
}
