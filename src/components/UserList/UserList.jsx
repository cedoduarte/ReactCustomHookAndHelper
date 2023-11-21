import React from "react";
import { useState, useEffect } from "react";
import { DATA } from "../../globals/Globals.jsx";

export const UserList = ({endpoint}) => {
    
    const [data, setData] = useState([]);

    const fetchData = async() => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
            setData(await response.json());
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    return (
        <>
            <ul>
                {
                    endpoint === DATA.USERS ? data.map(item => <li key={item.id}>{item.name}</li>)
                                            : data.map(item => <li key={item.id}>{item.body}</li>)
                }
            </ul>
        </>
    );
}