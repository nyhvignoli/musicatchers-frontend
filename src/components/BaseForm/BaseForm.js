import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormContainer, StyledTextField, StyledButton } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const BaseForm = () => {
  const classes = useStyles();

  return (
    <div>
      <FormContainer className={classes.root} noValidate autoComplete="off">
        <StyledTextField id="filled-basic" label="E-mail" variant="filled" fullWidth />
        <StyledTextField id="filled-basic" label="Senha" variant="filled" fullWidth/>
        <StyledButton variant="outlined" color="secondary">
          Entrar
        </StyledButton>
      </FormContainer>
    </div>
  );
}

export default BaseForm;