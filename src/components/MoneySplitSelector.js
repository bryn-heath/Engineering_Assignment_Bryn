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
    minWidth: '70%',
    '& .MuiInput-underline:after': {
      borderBottomColor: '#042c34',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const MoneySplitSelector = ({ selectedSplit, setSelectedSplit }) => {
  const classes = useStyles();

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={selectedSplit}
          onChange={(e) => setSelectedSplit(e.target.value)}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Select a split
          </MenuItem>
          <MenuItem value={'Equal'}>Equal</MenuItem>
          <MenuItem value={'More-odd'}>More-odd</MenuItem>
        </Select>
        <FormHelperText>Split style</FormHelperText>
      </FormControl>
    </div>
  );
};

export default MoneySplitSelector;
