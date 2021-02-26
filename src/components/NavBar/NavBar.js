import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../router/coordinator';
import { StyledToolbar } from './styles';

const NavBar = (props) => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const handleClick = () => {
    if (token) {
      localStorage.removeItem("token");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar>
      <StyledToolbar>
        <Button 
          color="inherit"
          onClick={handleClick}
        >
          {props.buttonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;