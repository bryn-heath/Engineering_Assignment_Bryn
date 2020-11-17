import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    '& label.Mui-focused': {
      color: '#042c34',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    fontWeight: 'bold',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
    fontColor: '#042c34',
  },
  fontStyle: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 1.1,
    fontColor: '#042c34',
  },
}));

const MoneyAmountInput = ({ setAmount, inputAmountRef }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel
          className={classes.fontStyle}
          htmlFor="standard-adornment-amount"
        >
          Amount
        </InputLabel>
        <Input
          onChange={(e) => setAmount(e.target.value)}
          className={classes.fontStyle}
          inputRef={inputAmountRef}
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
    </div>
  );
};
export default MoneyAmountInput;
