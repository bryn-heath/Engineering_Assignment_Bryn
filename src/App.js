import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  mainContainer: {
    margin: 'auto',
    height: '60vh',
    width: '60vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: `translate(${0}, ${25}%)`,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#042c34',
    borderStyle: 'solid',
  },
}));

const App = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div class={classes.mainContainer}>
      <div></div>
      {'setup'}
      <div></div>
    </div>
  );
};

export default App;
