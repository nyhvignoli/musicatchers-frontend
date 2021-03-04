import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { goBack, goToLogin } from '../../router/coordinator';
import { MusicatchersHeaderLogo, StyledToolbar } from './styles';
import { logout } from '../../services/user';
import musicatchersHeaderLogo from '../../assets/musicatchers-header-logo.png';

const NavBar = (props) => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const handleClick = () => {
    switch (props.action) {
      case 'go-back':
        goBack(history);
        break;
      case 'logout':
        logout(token, history);
        break;
      case 'login':
        goToLogin(history);
        break;
      default:    
    };
  };

  return (
    <AppBar>
      <StyledToolbar>
        <MusicatchersHeaderLogo src={musicatchersHeaderLogo} />
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