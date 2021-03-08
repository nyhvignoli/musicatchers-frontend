import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StyledAccordion, StyledAccordionSummay, MusicListContainer } from './styles';

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
          <Typography className={classes.heading}>{props.playlist.name}</Typography>
          <Typography className={classes.secondaryHeading}>{props.playlist.description}</Typography>
        </StyledAccordionSummay>
        <StyledAccordionSummay>
            <MusicListContainer>
                <Typography>
                    Lista de Músicas Aqui
                </Typography>
                <Typography>
                    Lista de Músicas Aqui
                </Typography>
                <Typography>
                    Lista de Músicas Aqui
                </Typography>
                <Typography>
                    Lista de Músicas Aqui
                </Typography>
            </MusicListContainer>
        </StyledAccordionSummay>
      </StyledAccordion>
    </div>
  );
};

export default PlaylistAccordion;