import NavBar from'../components/NavBar';
import ToDoList from '../components/ToDoList';
export default function Liste(){
    
    return(
        <>
            <NavBar></NavBar>
            <h1>Bienvenue sur la ToDo List</h1>
            <ToDoList></ToDoList>
        </>
    ) 
}