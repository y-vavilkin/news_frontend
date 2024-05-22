import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import * as React from 'react';

import classes from './FiltersField.module.scss';

const FiltersField = () => {
  const [age, setAge] = React.useState('ALL');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box className={classes.box}>
      <FormControl fullWidth>
        <Select
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={'ALL'}>ALL</MenuItem>
          <MenuItem value={'TITLE'}>TITLE</MenuItem>
          <MenuItem value={'TAGS'}>TAGS</MenuItem>
          <MenuItem value={'AUTHORS'}>AUTHORS</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FiltersField;
