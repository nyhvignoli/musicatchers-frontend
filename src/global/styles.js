import styled from 'styled-components';
import { backgroundGradient } from '../constants/colors';

export const AppContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const MainContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(${backgroundGradient});
`;