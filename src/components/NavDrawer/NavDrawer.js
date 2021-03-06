import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { goToCreateMusic, goToMusicFeed, goToPlaylist } from '../../router/coordinator';
import { useRequestData } from '../../hooks/useRequestData';
import { axiosConfig, BASE_URL } from '../../constants/requestConfig';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Progress from '../../components/Feedback/CircularProgress';
import { BaseFlex } from '../../global/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: '0',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const NavDrawer = (props) => {
  const classes = useStyles();
  const { data } = useRequestData(`${BASE_URL}/user/profile`, axiosConfig, undefined);

  const menuItens = [
    { 
      id: 'home',
      text: 'Início', 
      icon: <HomeIcon/>
    },
    { 
      id: 'add-musica',
      text: 'Adicionar músicas', 
      icon: <MusicNoteIcon/>
    },{
      id: 'create-playlist',
      text: 'Criar playlist',
      icon: <PlaylistAddIcon/>
    },{
      id: 'my-playlists',
      text: 'Minhas playlists',
      icon: <LibraryMusicIcon/>
    }
  ];

  const handleMenu = (item, history) => {
    switch (item.id) {
      case 'home':
        goToMusicFeed(history);
      break;
      case 'add-musica':
        goToCreateMusic(history);
      break;
      case 'create-playlist':
        props.handleClickOpen();
      break;
      case 'my-playlists':
        goToPlaylist(history);
      break;
    };
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <BaseFlex>
          {data ? 
            <ProfileInfo 
              user={data}
            /> : 
            <Progress color="primary"/>
          }
        </BaseFlex>
        <Divider />
        <List>
          {menuItens.map((item, index) => (
            <ListItem 
              button 
              key={item.id}
              onClick={() => handleMenu(item, props.history)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavDrawer;