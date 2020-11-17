import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MoneyAmountInput from './components/MoneyAmountInput.js';
import MoneySplitSelector from './components/MoneySplitSelector.js';
import SplitGrid from './components/SplitGrid.js';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: 'auto',
    height: '60vh',
    width: '80vw',
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
    fontFamily: 'Roboto',
    width: '20vw',
    padding: 25,
  },
  containerRight: {
    transform: `translate(${0}, ${-10}%)`,
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto',
    width: '80vw',
    padding: 25,
  },
}));

const App = () => {
  const [selectedSplit, setSelectedSplit] = useState('');
  const [selectedAmount, setAmount] = useState('');
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.containerLeft}>
        <MoneyAmountInput setAmount={setAmount} />
        <MoneySplitSelector
          setSelectedSplit={setSelectedSplit}
          selectedSplit={selectedSplit}
        />
      </div>

      <div className={classes.containerRight}>
        <SplitGrid
          selectedSplit={selectedSplit}
          selectedAmount={selectedAmount}
        />
      </div>
    </div>
  );
};

export default App;
