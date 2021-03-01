import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { ChipGroupContainer, StyledChip } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const GenreChipGroup = (props) => {
  const classes = useStyles();

  return (
    <ChipGroupContainer>
      {props.genres.map((genre) => {
        return (
          <li key={genre.id}>
            <StyledChip
                label={genre.name}
                className={classes.chip}
            />
          </li>
        );
      })}
    </ChipGroupContainer>
  );
};

export default GenreChipGroup;