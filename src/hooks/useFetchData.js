import { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData.js";

export const useFetchData = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(endpoint).then(res => {
            setData(res.data);
            setIsLoading(res.isLoading);
        });
    }, [endpoint]);

    return {
        data,
        isLoading
    }
}