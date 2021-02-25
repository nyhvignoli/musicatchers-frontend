import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormContainer, StyledTextField, StyledButton } from './styles';
import { useForm } from '../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SignupForm = (props) => {
    const classes = useStyles();
    const { form, onChange } = useForm({
        name: '',
        nickname: '',
        email: '',
        password: ''
    });

    return (
        <div>
            <FormContainer className={classes.root} noValidate autoComplete="off">
                <StyledTextField 
                    label='Nome' 
                    type='text'
                    name='name'
                    variant="filled" 
                    color="secondary"
                    value={form.name} 
                    onChange={onChange}
                    fullWidth
                />
                <StyledTextField 
                    label='Nickname' 
                    type='text'
                    name='nickname'
                    variant="filled" 
                    color="secondary"
                    value={form.nickname} 
                    onChange={onChange}
                    fullWidth
                />
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
                    {props.buttonText}
                </StyledButton>
            </FormContainer>
        </div>
    );
};

export default SignupForm;