import React from "react";
import { useHistory } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import { goToMusicDetails } from '../../router/coordinator';
import { 
  StyledCard, 
  StyledCardContent, 
  MusicDisplayContainer,
  Audio, 
  StyledIconButton 
} from './styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const PlaylistItem = (props) => {
  const history = useHistory();

  const handleClick = (musicId) => {
    if (window.confirm("Tem certeza que quer remover essa música da playlist?")) {
        window.alert(`Removeu a música de id '${musicId}' dessa playlist`);
    }
  };

  return (
    <StyledCard>
      <MusicDisplayContainer>
        <StyledCardContent
          onClick={() => goToMusicDetails(history, props.music.id)}
        >
          <Typography component="subtitle1">
            {props.music.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.music.author}
          </Typography>
        </StyledCardContent>
      </MusicDisplayContainer>
      <StyledIconButton 
        aria-label="music-options"
        onClick={() => handleClick(props.music.id)}
      >
        <HighlightOffIcon />
      </StyledIconButton>
    </StyledCard>
  );
};

export default PlaylistItem;