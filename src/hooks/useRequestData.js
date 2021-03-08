import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRequestData = (url, headers, initialState) => {
    const [data, setData] = useState(initialState);

    const getData = () => {
        axios.get(url, headers)
        .then(res => {
            setData(res.data);
        }).catch(error => {
            window.alert("Ocorreu um erro inesperado :(")
            console.log(
                error.response && 
                error.response.data || 
                error.message
            );
        });
    };

    useEffect(() => {
        getData();
    },[]);

    return { data, getData };
};