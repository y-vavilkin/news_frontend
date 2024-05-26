import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useLocation } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postsSetType } from '../../redux/actions/posts';
import menuList from '../../constants/filters';

import classes from './SearchFilter.module.scss';

const SearchFilter = () => {
  const dispatch = useAppDispatch();
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);

  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(postsSetType(event.target.value));
  };

  const filteredMenuList = useMemo(() =>
    menuList.filter((menuItem) => isMainPage || !menuItem.onlyOnMainPage),
  [isMainPage]);

  return (
    <Box className={classes.box}>
      <FormControl fullWidth>
        <Select
          value={typeOfSearch}
          onChange={handleChange}
          name='filter-type'
        >
          {filteredMenuList.map((menuItem) => (
            <MenuItem key={menuItem.id} value={menuItem.value}>
              {menuItem.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchFilter;
