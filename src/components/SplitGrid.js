import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'arial',
    flexGrow: 1,
  },
  paper: {
    width: 55,
    padding: 8,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  infoText: {
    paddingTop: 45,
    fontSize: 16,
    fontFamily: 'arial',
  },
}));

const SplitGrid = ({ selectedSplit, selectedAmount }) => {
  const classes = useStyles();
  const setTenDays = Array.from({ length: 10 }, (_, i) => i + 1);
  const setNineDays = Array.from({ length: 9 }, (_, i) => i + 1);

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  });

  function FormRowHeader() {
    const BuildDayGrid = setTenDays.map((ea) => (
      <Grid key={ea} item xs={1}>
        <Paper className={classes.paper}>Day {ea}</Paper>
      </Grid>
    ));

    return <>{BuildDayGrid}</>;
  }

  function FormRowEqual() {
    let perDayAmount;
    let lastDayAmount;
    const dailyAmount = selectedAmount / 10;
    if (Number.isInteger(dailyAmount)) {
      // check whole number
      perDayAmount = dailyAmount;
      lastDayAmount = dailyAmount;
    } else {
      // per day calc
      const truncateDecimals = (number, digits) => {
        var multiplier = Math.pow(10, digits),
          adjustedNum = number * multiplier,
          truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

        return truncatedNum / multiplier;
      };
      perDayAmount = truncateDecimals(dailyAmount, 2);

      // if (perDayAmount.toString().split('.')[1].length === 1) {
      //   perDayAmount = perDayAmount + '0';
      // }
      // last day calc
      lastDayAmount = selectedAmount - 9 * perDayAmount;
      lastDayAmount = lastDayAmount.toFixed(2);
      lastDayAmount = formatter.format(lastDayAmount);
      perDayAmount = formatter.format(perDayAmount);
    }

    const BuildEqualGrid = setNineDays.map((ea, i) => (
      <Grid key={ea} item xs={1}>
        <Paper className={classes.paper}>{perDayAmount}</Paper>
      </Grid>
    ));

    return (
      <>
        {BuildEqualGrid}
        <Grid item xs={1}>
          <Paper className={classes.paper}>{lastDayAmount}</Paper>
        </Grid>
      </>
    );
  }

  function FormRowMoreOdd() {
    let perOddDayAmount;
    let perEvenDayAmount;
    let lastDayAmount = selectedAmount;
    const dailyAmount = selectedAmount / 10;

    const truncateDecimal = (number, digits) => {
      var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

      return truncatedNum / multiplier;
    };

    perOddDayAmount = dailyAmount / 0.75;
    perOddDayAmount = truncateDecimal(perOddDayAmount, 2);

    perEvenDayAmount = perOddDayAmount / 2;
    perEvenDayAmount = truncateDecimal(perEvenDayAmount, 2);

    lastDayAmount -= perOddDayAmount * 5;
    lastDayAmount -= perEvenDayAmount * 4;
    lastDayAmount = lastDayAmount.toFixed(2);

    lastDayAmount = formatter.format(lastDayAmount);
    perOddDayAmount = formatter.format(perOddDayAmount);
    perEvenDayAmount = formatter.format(perEvenDayAmount);

    const BuildMoreOddGrid = [];
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        //returns nothing because of day 0
      } else if (i % 2 === 0) {
        BuildMoreOddGrid.push(
          <Grid item xs={1}>
            <Paper className={classes.paper}>{perEvenDayAmount}</Paper>
          </Grid>
        );
      } else {
        BuildMoreOddGrid.push(
          <Grid key={i} item xs={1}>
            <Paper className={classes.paper}>{perOddDayAmount}</Paper>
          </Grid>
        );
      }
    }

    return (
      <>
        {BuildMoreOddGrid}
        <Grid item xs={1}>
          <Paper className={classes.paper}>{lastDayAmount}</Paper>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {window.screen.width < 450 ? (
          <div style={{ flexDirection: 'row' }}>
            <Grid
              container
              item
              xs={'auto'}
              spacing={window.screen.width < 450 ? 1 : 5}
              direction={window.screen.width < 450 ? 'column' : 'row'}
            >
              <FormRowHeader />
            </Grid>
          </div>
        ) : (
          <Grid
            container
            item
            xs={'auto'}
            spacing={window.screen.width < 450 ? 1 : 5}
            direction={window.screen.width < 450 ? 'column' : 'row'}
          >
            <FormRowHeader />
          </Grid>
        )}

        {window.screen.width < 450 ? (
          <div style={{ flexDirection: 'row' }}>
            <Grid
              container
              item
              xs={'auto'}
              spacing={window.screen.width < 450 ? 1 : 5}
              direction={window.screen.width < 450 ? 'column' : 'row'}
            >
              {selectedSplit === 'Equal' ? <FormRowEqual /> : null}
            </Grid>
          </div>
        ) : (
          <Grid
            container
            item
            xs={'auto'}
            spacing={window.screen.width < 450 ? 1 : 5}
            direction={window.screen.width < 450 ? 'column' : 'row'}
          >
            {selectedSplit === 'Equal' ? <FormRowEqual /> : null}
          </Grid>
        )}

        {window.screen.width < 450 ? (
          <div style={{ flexDirection: 'row' }}>
            <Grid
              container
              item
              xs={'auto'}
              spacing={window.screen.width < 450 ? 1 : 5}
              direction={window.screen.width < 450 ? 'column' : 'row'}
            >
              {selectedSplit === 'More-odd' ? <FormRowMoreOdd /> : null}
            </Grid>
          </div>
        ) : (
          <Grid
            container
            item
            xs={'auto'}
            spacing={window.screen.width < 450 ? 1 : 5}
            direction={window.screen.width < 450 ? 'column' : 'row'}
          >
            {selectedSplit === 'More-odd' ? <FormRowMoreOdd /> : null}
          </Grid>
        )}
      </Grid>
      <div className={classes.infoText}>
        {selectedSplit === 'Equal'
          ? 'Info: the same amount to be donated every day'
          : null}
        {selectedSplit === 'More-odd'
          ? 'Info: double the amount to be donated on odd-numbered days'
          : null}
      </div>
    </div>
  );
};
export default SplitGrid;
