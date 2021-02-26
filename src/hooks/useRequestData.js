import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRequestData = (url, headers, initialState) => {
    const [data, setData] = useState(initialState);

    const getData = () => {
        axios.get(url, headers)
        .then(res => {
            setData(res.data);
        }).catch(error => {
            console.log(error.message || error.response.data);
        });
    };

    useEffect(() => {
        getData();
    },[]);

    return { data, getData };
};