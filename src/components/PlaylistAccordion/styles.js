import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { lightGradient } from '../../constants/colors';

export const StyledAccordion = styled(Accordion)`
    display: flex;
    flex-direction: column;
`;

export const StyledAccordionSummay = styled(AccordionSummary)`
    background: linear-gradient(${lightGradient});
`;

export const MusicListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`;