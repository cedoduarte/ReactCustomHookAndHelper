import { useState } from "react";
import { UserList } from "../UserList/UserList";
import { DATA } from "../../globals/Globals.jsx";

export const UsersApp = () => {
    const [endpoint, setEndpoint] = useState(DATA.USERS);

    const handleFetch = (theEndpoint) => {
        setEndpoint(theEndpoint);
    }

    return (
        <>
            <h1>Lista de Usuarios:</h1>
            <UserList endpoint={endpoint}></UserList>
            <button onClick={() => handleFetch(DATA.USERS)}>Llamar usuarios</button>
            <button onClick={() => handleFetch(DATA.COMMENTS)}>Llamar comentarios</button>
        </>
    );
}