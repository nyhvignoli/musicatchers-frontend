export const BASE_URL = "https://musicatchers.herokuapp.com";

export const axiosConfig = {
    headers: {
        authorization: window.localStorage.getItem('token')
    }
};