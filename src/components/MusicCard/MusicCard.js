import React from "react";
import { useHistory } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { goToMusicDetails } from '../../router/coordinator';
import { 
  StyledCard, 
  StyledCardContent, 
  MusicDisplayContainer,
  Audio, 
  StyledIconButton 
} from './styles';
import { dateToString } from '../../services/dateManager';
import Menu from '../CustomMenu/CustomMenu';

const MusicCard = (props) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const details = (
    <div>
      <Typography variant="subtitle1" color="textSecondary">
        Álbum: {props.music.album}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {dateToString(props.music.date)}
      </Typography>
    </div>
  );

  return (
    <StyledCard>
      <MusicDisplayContainer>
        <StyledCardContent
          clickable={props.clickable}
          onClick={
            props.clickable ? 
            () => goToMusicDetails(history, props.music.id) : 
            null
          }
        >
          <Typography component="h6" variant="h6">
            {props.music.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.music.author}
          </Typography>
          {!props.clickable && details}
        </StyledCardContent>
        <Audio 
          controls
          src={props.music.file}
        />
      </MusicDisplayContainer>
      <StyledIconButton 
        aria-label="music-options"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </StyledIconButton>
      <Menu 
        handleClose={handleClose}
        anchorEl={anchorEl}
        musicId={props.music.id}
        history={history}
        isFeedScreen={props.clickable}
      />
    </StyledCard>
  );
};

export default MusicCard;