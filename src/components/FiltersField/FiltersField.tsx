import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postsSetType } from '../../redux/actions/posts';
import {
  ALL,
  TITLE,
  TAGS,
  AUTHORS,
  MAIN_PAGE
} from '../../constants';

import classes from './FiltersField.module.scss';

const FiltersField = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<string>('ALL');
  const page = useAppSelector(state => state.posts.page);
  const isMainPage = page === MAIN_PAGE;

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
    dispatch(postsSetType(event.target.value));
  };

  return (
    <Box className={classes.box}>
      <FormControl fullWidth>
        <Select
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value={ALL}>ALL</MenuItem>
          <MenuItem value={TITLE}>TITLE</MenuItem>
          <MenuItem value={TAGS}>TAGS</MenuItem>
          {isMainPage && <MenuItem value={AUTHORS}>AUTHORS</MenuItem>}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FiltersField;
