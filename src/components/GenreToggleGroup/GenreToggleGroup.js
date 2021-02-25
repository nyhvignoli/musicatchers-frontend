import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const GenreToggleGroup = (props) => {

  return (
    <ToggleButtonGroup value={props.value} onChange={props.onChange}>
      <ToggleButton value="indie" aria-label="indie">
        Indie
      </ToggleButton>
      <ToggleButton value="rap" aria-label="rap">
        Rap
      </ToggleButton>
      <ToggleButton value="pop" aria-label="pop">
        Pop
      </ToggleButton>
      <ToggleButton value="metal" aria-label="metal">
        Metal
      </ToggleButton>
      <ToggleButton value="classic" aria-label="classic">
        Clássica
      </ToggleButton>
      <ToggleButton value="mpb" aria-label="mpb">
        MPB
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default GenreToggleGroup;