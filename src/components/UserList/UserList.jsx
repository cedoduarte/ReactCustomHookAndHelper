import { useFetchData } from "../../hooks/useFetchData.js";
import { DATA } from "../../globals/Globals.jsx";

export const UserList = ({endpoint}) => {    
    const { data, isLoading } = useFetchData(endpoint);
    return (
        <>
            <ul>
                {
                    isLoading ? <p>cargando...</p> 
                              : endpoint === DATA.USERS ? data.map(item => <li key={item.id}>{item.name}</li>)
                              : data.map(item => <li key={item.id}>{item.body}</li>)
                }
            </ul>
        </>
    );
}