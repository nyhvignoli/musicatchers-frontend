import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormContainer, StyledTextField, StyledButton } from '../BaseForm/styles';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/entities/user';
import { useHistory } from 'react-router-dom';
import { checkPassword } from '../../services/validator';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const LoginForm = () => {
    const classes = useStyles();
    const history = useHistory();
    const { form, onChange } = useForm({
        email: '',
        password: ''
    });

    const onSubmitForm = (event) => {
        event.preventDefault();
        checkPassword(form.password);
        login(form, history);
    };

    return (
        <div>
            <FormContainer
                onSubmit={onSubmitForm} 
                className={classes.root} 
                autoComplete="off"
            >
                <StyledTextField
                    required 
                    label='E-mail' 
                    type='email'
                    name='email'
                    variant="filled" 
                    color="secondary" 
                    value={form.email}
                    onChange={onChange}
                    fullWidth
                />
                <StyledTextField 
                    required
                    label='Senha' 
                    type='password'
                    name='password'
                    variant="filled" 
                    color="secondary"
                    value={form.password} 
                    onChange={onChange}
                    fullWidth
                />        
                <StyledButton 
                    type='submit'
                    variant="outlined" 
                    color="secondary"
                >
                    Entrar
                </StyledButton>
            </FormContainer>
        </div>
    );
};

export default LoginForm;