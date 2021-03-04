import CircularProgress from '@material-ui/core/CircularProgress';

const Progress = (props) => {

  return (
    <CircularProgress color={props.color} />
  );
};

export default Progress;