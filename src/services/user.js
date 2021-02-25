import axios from 'axios';
import { BASE_URL } from '../constants/requestConfig';
import { goToMusicFeed } from '../router/coordinator';

export const signup = (body, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then(res => {
        localStorage.setItem('token', res.data.token);
        goToMusicFeed(history);
    }).catch(error => {
        console.log(error.message);
    });
};