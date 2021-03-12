import axios from 'axios';
import { BASE_URL } from '../../constants/requestConfig';
import { goToMusicFeed } from '../../router/coordinator';

export const createMusic = (body, history) => {
    const axiosConfig = {
        headers: {
            authorization: window.localStorage.getItem('token')
        }
    };
    
    axios.post(`${BASE_URL}/music`, body, axiosConfig)
    .then((res) => {
        console.log(res.data);
        goToMusicFeed(history);
    }).catch(error => {
        window.alert('Erro ao adicionar música :(');
        console.log(error.response.data);
    });
};