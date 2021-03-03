import styled from 'styled-components';
import { TextField, DialogContent, DialogActions, Button } from '@material-ui/core';
import { lightGradient } from '../../constants/colors';

export const DialogContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 100%;
    padding: 20px;
`;

export const StyledDialogContent = styled(DialogContent)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const StyledTextField = styled(TextField)`
    width: 100%;
`;

export const StyledDialogActions = styled(DialogActions)`
    margin: 18px;
`;

export const StyledButton = styled(Button)`
    background-image: linear-gradient(${lightGradient});
`;