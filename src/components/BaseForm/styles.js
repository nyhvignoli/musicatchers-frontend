import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const FormContainer = styled.form`
    width: 90vw;
    max-width: 400px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledTextField = styled(TextField)`
    background-image: linear-gradient(
        to left,
        rgba(110, 93, 255, 1),
        rgba(201, 71, 255, 1)
    );
    
    border-radius: 5px;
`;

export const StyledButton = styled(Button)`
    width: 100%;
    color: #FFF;
`;