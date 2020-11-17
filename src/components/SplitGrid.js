import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // width: '15%',
  },
  paper: {
    width: '100px',
    padding: 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SplitGrid = ({ selectedSplit, selectedAmount }) => {
  const classes = useStyles();
  const setTenDays = Array.from({ length: 10 }, (_, i) => i + 1);
  const setNineDays = Array.from({ length: 9 }, (_, i) => i + 1);

  function FormRowHeader() {
    const BuildDayGrid = setTenDays.map((ea) => (
      <Grid item xs={1}>
        <Paper className={classes.paper}>Day {ea}</Paper>
      </Grid>
    ));

    return <>{BuildDayGrid}</>;
  }

  function FormRowEqual() {
    let calculatedAmount;
    let firstFig;
    let decimalFig;

    const dailyAmount = selectedAmount / 10;
    console.log('dailyyyy', dailyAmount);

    if (Number.isInteger(dailyAmount)) {
      //check whole number

      calculatedAmount = dailyAmount;
      console.log('hitss true CARRY ON HERE TRUE OR FALSE', calculatedAmount);
    } else if (dailyAmount == 1000) {
      firstFig = dailyAmount.split('.')[0];
      decimalFig = dailyAmount.split('.')[1].substring(0, 2);
    }
    let lastDayAmount = selectedAmount - 9 * calculatedAmount;
    const BuildEqualGrid = setNineDays.map((ea) => (
      <Grid item xs={1}>
        <Paper className={classes.paper}>$ {calculatedAmount}</Paper>
      </Grid>
    ));

    return (
      <>
        {BuildEqualGrid}
        <Grid item xs={1}>
          <Paper className={classes.paper}>$ {lastDayAmount}</Paper>
        </Grid>
      </>
    );
  } // Returns Days 1-9 + Final Day

  function FormRowSplit() {
    return <>{'ok'}</>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={'auto'} spacing={3}>
          <FormRowHeader />
        </Grid>
        <Grid container item xs={'auto'} spacing={3}>
          {selectedSplit === 'Equal' ? <FormRowEqual /> : null}
        </Grid>
        <Grid container item xs={'auto'} spacing={3}>
          {selectedSplit === 'More-odd' ? <FormRowSplit /> : null}
        </Grid>
      </Grid>
      {/* {selectedAmount} */}
    </div>
  );
};
export default SplitGrid;
