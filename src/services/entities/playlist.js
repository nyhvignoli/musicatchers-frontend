import axios from 'axios';
import { BASE_URL } from '../../constants/requestConfig';

const axiosConfig = {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
};

export const createPlaylist = (body, update) => {
    axios.put(`${BASE_URL}/playlist`, body, axiosConfig)
    .then((res) => {
        console.log(res.data);
        window.alert(`Sua playlist '${body.name}' foi criada com sucesso!`);
        update();
    }).catch(error => {
        window.alert('Erro ao criar playlist :(');
        console.log(
            error.response && 
            error.response.data || 
            error.message
        );
    });
};

export const addTrackToPlaylist = (body, update) => {
    axios.put(`${BASE_URL}/playlist/track`, body, axiosConfig)
    .then((res) => {
        console.log(res.data);
        window.alert(`Música adicionada com sucesso à playlist!`);
        update();
    }).catch(error => {
        window.alert('Erro ao adicionar música à playlist :(');
        console.log(
            error.response && 
            error.response.data || 
            error.message
        );
    });
};