export const BASE_URL = "http://localhost:3003";

export const axiosConfig = {
    headers: {
        authorization: window.localStorage.getItem('token')
    }
};