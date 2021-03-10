import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StyledAccordion, StyledAccordionSummay, MusicListContainer } from './styles';
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/requestConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
  },
}));

const PlaylistAccordion = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { playlist } = props;

  const axiosConfig = {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  };
  const { data, getData } = useRequestData(`${BASE_URL}/playlist/track/all/${playlist.id}`, axiosConfig, undefined);

  useEffect(() => {
    getData();
  },[getData])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <StyledAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <StyledAccordionSummay
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{playlist.name}</Typography>
          <Typography className={classes.secondaryHeading}>{playlist.description}</Typography>
        </StyledAccordionSummay>
        <StyledAccordionSummay>
            <MusicListContainer>
              {data && data.length === 0 && <p>Playlist vazia</p>}
              {data && data.map((music) => {
                return (
                  <PlaylistItem music={music}/>
                )
              })}
            </MusicListContainer>
        </StyledAccordionSummay>
      </StyledAccordion>
    </div>
  );
};

export default PlaylistAccordion;