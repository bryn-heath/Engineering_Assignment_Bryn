import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SumMoneyInput from './components/SumMoneyInput.js';
import MoneySplitSelector from './components/MoneySplitSelector.js';
import SplitGrid from './components/SplitGrid.js';

const useStyles = makeStyles((theme) => ({
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
  containerLeft: {
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    // alignItems: 'center',
    fontFamily: 'Roboto',
    width: '20vw',
    padding: 50,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#042c34',
    borderStyle: 'solid',
  },
  containerRight: {
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto',
    width: '80vw',
    padding: 50,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#042c34',
    borderStyle: 'solid',
  },
}));

const App = () => {
  const classes = useStyles();
  const inputSumRef = useRef();
  const inputSplitRef = useRef();

  //   console.log('ref1', inputSumRef.current.value);

  //   console.log('ref2', inputSplitRef.current.value);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.containerLeft}>
        <SumMoneyInput inputSumRef={inputSumRef} />
        <MoneySplitSelector inputSplitRef={inputSplitRef} />
      </div>

      <div className={classes.containerRight}>
        <SplitGrid />
      </div>
    </div>
  );
};

export default App;
