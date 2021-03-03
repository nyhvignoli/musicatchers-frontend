import ToggleButton from '@material-ui/lab/ToggleButton';
import { StyledToggleButtonGroup } from './styles';

const GenreToggleGroup = (props) => {

  return (
    <StyledToggleButtonGroup 
      value={props.value} 
      onChange={props.onChange}
    >
      {props.genres && props.genres.map((genre) => {
        return (
          <ToggleButton 
            key={genre}
            value={genre} 
            aria-label={genre}
          >
            {genre}
          </ToggleButton>
        )
      })} 
    </StyledToggleButtonGroup>
  );
};

export default GenreToggleGroup;