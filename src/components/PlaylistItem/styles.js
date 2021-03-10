import styled from 'styled-components';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton"
import { lightGradient } from '../../constants/colors';

export const StyledCard = styled(Card)`
    background-image: linear-gradient(${lightGradient});
    width: 50vw;
    min-width: 300px;
    max-width: 800px;
    display: flex;
    margin: 5px;
    justify-content: space-between;
`;

export const StyledCardContent = styled(CardContent)`
    &:hover {
        cursor: pointer;
    };
`;

export const MusicDisplayContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const StyledIconButton = styled(IconButton)`
    height: 42px;
    width: 42px;
`; 