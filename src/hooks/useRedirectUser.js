import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToMusicFeed, goToLogin } from '../router/coordinator';

export const useProtectedPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        !token && goToLogin(history);
    },[history]);
};

export const useRedirectUser = () => {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        token && goToMusicFeed(history);
    },[history]);
};