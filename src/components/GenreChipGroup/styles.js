import { Chip } from '@material-ui/core';
import styled from 'styled-components';
import { lightGradient } from '../../constants/colors';

export const ChipGroupContainer = styled.ul`
    display: flex;
    list-style: none;
    padding-inline-start: 0;
`

export const StyledChip = styled(Chip)`
    background-image: linear-gradient(${lightGradient});
`;