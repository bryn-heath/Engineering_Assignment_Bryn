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
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SplitGrid = () => {
  const classes = useStyles();

  function FormRow() {
    return (
      <>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={'auto'}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={'auto'} spacing={2}>
          <FormRow />
        </Grid>
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
};
export default SplitGrid;
