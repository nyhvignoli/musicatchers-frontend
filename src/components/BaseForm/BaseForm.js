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

const BaseForm = (props) => {
  const classes = useStyles();

  return (
    <div>
      <FormContainer className={classes.root} noValidate autoComplete="off">
        {props.fields && props.fields.map((field) => {
          return (
            <StyledTextField id="filled-basic" label={field} variant="filled" color="secondary" fullWidth />
          );
        })}
        
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