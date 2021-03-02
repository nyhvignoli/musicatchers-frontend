import axios from 'axios';
import { BASE_URL } from '../constants/requestConfig';
import { goToMusicFeed, goToLogin } from '../router/coordinator';
import { loginError, signupError } from './errorHandler';

export const signup = (body, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then(res => {
        allowAccess(res.data.token, history);
    }).catch(error => {
        const errorMessage = error.response && error.response.data || error.message
        console.log(errorMessage);
        const finalMessage = signupError(errorMessage);
        finalMessage && window.alert(finalMessage);
    });
};

export const login = (body, history) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then(res => {
        allowAccess(res.data.token, history);
    }).catch(error => {
        const errorMessage = error.response && error.response.data || error.message
        console.log(errorMessage);
        const finalMessage = loginError(errorMessage);
        finalMessage && window.alert(finalMessage);
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