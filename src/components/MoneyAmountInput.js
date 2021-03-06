import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const widthMobCheck = window.screen.width < 450 ? 100 : '80%';

const useStyles = makeStyles((theme) => ({
  root: {
    width: widthMobCheck,
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

  const onHandleChangeNumeric = (e) => {
    if (!Number(e.target.value) && e.target.value > 0) {
      console.log('erroe');
      return;
    }
    return setAmount(e.target.value);
  }; //checks if the input is a solid number value 0-9999

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
          inputProps={{ min: 0, max: 99999, step: 0.01 }}
          type="number"
          onChange={(e) => onHandleChangeNumeric(e)}
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
