import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { goToLogin, goBack } from '../../router/coordinator';

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
      <Toolbar>
        <Button 
          color="inherit"
          onClick={handleClick}
        >
          {props.buttonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;