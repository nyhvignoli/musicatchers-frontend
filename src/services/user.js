import axios from 'axios';
import { BASE_URL } from '../constants/requestConfig';
import { goToMusicFeed, goToLogin } from '../router/coordinator';

export const signup = (body, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then(res => {
        allowAccess(res.data.token, history);
    }).catch(error => {
        console.log(error.message || error.response.data);
    });
};

export const login = (body, history) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then(res => {
        allowAccess(res.data.token, history);
    }).catch(error => {
        console.log(error.message || error.response.data);
    });
};

const allowAccess = (token, history) => {
    window.localStorage.setItem('token', token);
    goToMusicFeed(history);
};

export const logout = (token, history) => {
    if (token) {
      localStorage.removeItem("token");
      goToLogin(history);
    };
};