import NavBar from'../components/NavBar';
import SearchMovie from '../components/SearchMovie';

export default function MovieApi(){
    
    return(
        <>
            <NavBar></NavBar>
            <h1>Bienvenue sur l'API 'Search Movie' </h1>
            <SearchMovie/>
        </>
    ) 
}