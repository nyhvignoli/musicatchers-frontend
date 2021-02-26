import styled from 'styled-components';
import { backgroundGradient } from '../constants/colors';

export const AppContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const MainContainer = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(${backgroundGradient});
`;


export const FlexBox = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row"};
    align-items: center;
    justify-content: center;
    gap: 20px;
`;