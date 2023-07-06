import NavBar from'../components/NavBar';
import FetchQuery from '../components/FetchQuery';
import DisplayPost from '../components/DisplayPost';

export default function Page5(){
    
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const queryOptions = '?_limit=10';

    return(
        <>
            <NavBar />
            <h1>Requêtes FETCH vers API</h1>
            <FetchQuery url={url} options={queryOptions} display={DisplayPost} />
        </>
    ) 
}

/*
Select :    - DisplayPost
            - DisplayUser
            - DisplayComments
            - DisplayPhotos
            ...

const baseURL = 'https://jsonplaceholder.typicode.com/'

let option =    return du select
let select =    '?_limit=10'

let finalURL = baseURL + option + select
*/