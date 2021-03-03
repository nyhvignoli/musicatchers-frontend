import React from "react";
import { useHistory } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import { goToMusicDetails } from '../../router/coordinator';
import { StyledCard, StyledCardContent, Audio } from './styles';
import { dateToString } from '../../services/dateManager';

const MusicCard = (props) => {
  const history = useHistory();

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
    </StyledCard>
  );
};

export default MusicCard;