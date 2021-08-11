import React, { useState, useContext } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CharactersContext from '../../context/Characters/charactersContext';

// css //
import './Filter.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Filter = () => {
  const characterContext = useContext(CharactersContext);
  const { setFilter } = characterContext;
  const classes = useStyles();
  const [count, setCount] = useState(10);
  const [offset, setOffset] = useState(1);
  const [openCount, setOpenCount] = React.useState(false);
  const [openOffset, setOpenOffset] = React.useState(false);

  const handleFilterData = () => {
    setFilter(count, offset);
  };

  const handleChangeCount = (event) => {
    setCount(event.target.value);
    handleFilterData();
  };

  const handleCloseCount = () => {
    setOpenCount(false);
  };

  const handleOpenCount = () => {
    setOpenCount(true);
  };
  const handleChangeOffset = (event) => {
    setOffset(event.target.value);
    handleFilterData();
  };

  const handleCloseOffset = () => {
    setOpenOffset(false);
  };

  const handleOpenOffset = () => {
    setOpenOffset(true);
  };
  return (
    <div className='filter'>
      <div className='filter__container'>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-controlled-open-select-label'>Count</InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open={openCount}
            onClose={handleCloseCount}
            onOpen={handleOpenCount}
            value={count}
            onChange={handleChangeCount}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={40}>Forty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-controlled-open-select-label'>offset</InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open={openOffset}
            onClose={handleCloseOffset}
            onOpen={handleOpenOffset}
            value={offset}
            onChange={handleChangeOffset}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={40}>Forty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filter;
