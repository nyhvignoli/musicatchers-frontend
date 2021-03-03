import axios from 'axios';
import { BASE_URL, axiosConfig } from '../constants/requestConfig';
import { goToMusicFeed } from '../router/coordinator';

export const createPlaylist = (body, history) => {
    axios.put(`${BASE_URL}/playlist`, body, axiosConfig)
    .then((res) => {
        console.log(res.data);
        window.alert(`Sua playlist '${body.name}' foi criada com sucesso!`);
        goToMusicFeed(history);
    }).catch(error => {
        console.log(
            error.response && 
            error.response.data || 
            error.message
        );
    });
};