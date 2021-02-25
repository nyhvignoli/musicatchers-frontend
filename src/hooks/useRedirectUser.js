import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../router/coordinator';

const useRedirectUser = () => {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        !token && goToLogin(history);
    },[history]);
};

export default useRedirectUser;