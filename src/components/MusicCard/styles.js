import styled from 'styled-components';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { lightGradient } from '../../constants/colors';

export const StyledCard = styled(Card)`
    background-image: linear-gradient(${lightGradient});
    width: 50vw;
    min-width: 300px;
    max-width: 800px;
    display: flex;
    padding: 5px 20px;
    justify-content: space-between;
`;

export const StyledCardContent = styled(CardContent)`
    &:hover {
        cursor: ${props => props.isClickable && 'pointer'};
    };
`;

export const Audio = styled.audio`
    align-self: center;
    justify-self: flex-end;
`;