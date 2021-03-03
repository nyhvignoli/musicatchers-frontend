import axios from 'axios';
import { BASE_URL, axiosConfig } from '../constants/requestConfig';
import { goToMusicFeed } from '../router/coordinator';

export const createMusic = (body, history) => {
    axios.post(`${BASE_URL}/music`, body, axiosConfig)
    .then((res) => {
        console.log(res.data);
        // update();
        goToMusicFeed(history);
    }).catch(error => {
        console.log(error.response.data);
    });
};