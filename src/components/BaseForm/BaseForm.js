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

const BaseForm = (props) => {
  const classes = useStyles();
  const { form, onChange } = useForm()

  return (
    <div>
      <FormContainer className={classes.root} noValidate autoComplete="off">
        <StyledTextField 
          label='Nome' 
          type='text'
          value=''
          name='name'
          variant="filled" 
          color="secondary" 
          fullWidth
        />
        <StyledTextField 
          label='Nickname' 
          type='text'
          value=''
          name='nickaname'
          variant="filled" 
          color="secondary" 
          fullWidth
        />
        <StyledTextField 
          label='E-mail' 
          type='email'
          value=''
          name='name'
          variant="filled" 
          color="secondary" 
          fullWidth
        />
        <StyledTextField 
          label='Senha' 
          type='password'
          value=''
          name='password'
          variant="filled" 
          color="secondary" 
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
}

export default BaseForm;