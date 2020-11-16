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

    '& .MuiInput-underline:after': {
      borderBottomColor: '#042c34',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const MoneySplitSelector = ({ inputSplitRef }) => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState('');

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  console.log('selected', selected);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          inputRef={inputSplitRef}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
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