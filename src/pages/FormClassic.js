import NavBar from'../components/NavBar';
import Formulaire from '../components/Formulaire';

export default function DisplayForm(){
    return(
        <>
            <NavBar></NavBar>
            <h1>Bienvenue sur un formulaire implémenté avec REACT</h1>
            <Formulaire></Formulaire>
        </>
    ) 
}