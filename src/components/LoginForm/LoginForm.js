import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormContainer, StyledTextField, StyledButton } from '../BaseForm/styles';
import { useForm } from '../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const LoginForm = (props) => {
    const classes = useStyles();
    const { form, onChange } = useForm({
        email: '',
        password: ''
    });

    return (
        <div>
            <FormContainer className={classes.root} noValidate autoComplete="off">
                <StyledTextField 
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