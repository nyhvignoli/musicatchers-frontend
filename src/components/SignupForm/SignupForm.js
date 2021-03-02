import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormContainer, StyledTextField, StyledButton } from './styles';
import { useForm } from '../../hooks/useForm';
import { signup } from '../../services/user';
import { useHistory } from 'react-router-dom';
import { checkPassword } from '../../services/validator';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SignupForm = () => {
    const classes = useStyles();
    const history = useHistory();
    const { form, onChange } = useForm({
        name: '',
        nickname: '',
        email: '',
        password: ''
    });

    const onSubmitForm = (event) => {
        event.preventDefault();
        checkPassword(form.password);
        signup(form, history);
    };

    return (
        <div>
            <FormContainer 
                className={classes.root}  
                autoComplete="off"
                onSubmit={onSubmitForm}
            >
                <StyledTextField 
                    required
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
                    required
                    label='Nickname' 
                    type='text'
                    name='nickname'
                    variant='filled' 
                    color='secondary'
                    value={form.nickname} 
                    onChange={onChange}
                    fullWidth
                />
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
                    variant="outlined" 
                    color="secondary"
                    type="submit"
                >
                    Cadastrar
                </StyledButton>
            </FormContainer>
        </div>
    );
};

export default SignupForm;