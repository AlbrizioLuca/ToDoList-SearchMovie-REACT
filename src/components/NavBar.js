import { Outlet, Link } from "react-router-dom";
import DateTime from "../components/DateTime";

export default function NavBar(){
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/resume" >A propos de React</Link></li>
                    <li><Link to="/to-do-list" >ToDo LIST</Link></li>
                    <li><Link to="/search-movie" >API Search Movie </Link></li>
                    <li><Link to="/formulaire" >Formulaire </Link></li>
                    <li><Link to="/admin" >Admin - CRUD</Link></li>
                </ul>
            </nav>
            <DateTime/>
            <Outlet />
        </>
    )
}