import styled from 'styled-components';
import { backgroundGradient } from '../constants/colors';

export const AppContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const MainContainer = styled.div`
    padding: 20px;
    margin-top: ${props => props.marginTop ? '64px' : '0px'};
    min-height: 100vh;
    background-image: linear-gradient(${backgroundGradient});
`;

export const BaseFlex = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row"};
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const FlexBox = styled.div`
    flex-grow: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row"};
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const FlexForm = styled.form`
    display: flex;
    flex-direction: ${props => props.row ? "row" : "column"};
    width: 85vw;
    max-width: ${props => props.medium ? "360px" : "100%"};
    gap: 20px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const FormContainer = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;