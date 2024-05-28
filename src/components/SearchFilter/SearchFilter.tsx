import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  Box
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import menuList, { AUTHORS } from '../../constants/filters';
import { setFilterSearch } from '../../redux/actions/posts';

import classes from './SearchFilter.module.scss';

const SearchFilter = () => {
  const dispatch = useAppDispatch();
  const [filtredList, setFiltredList] = useState(menuList);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);

  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const handleChange = (event: SelectChangeEvent): void => {
    dispatch(setFilterSearch(event.target.value));
  };

  useEffect(() => {
    setFiltredList(menuList.filter((menuItem) => menuItem.value !== AUTHORS || isMainPage));
  }, [isMainPage]);

  return (
    <Box className={classes.box}>
      <FormControl fullWidth>
        <Select
          value={typeOfSearch}
          onChange={handleChange}
          name="filter-type"
        >
          {filtredList.map((menuItem) => (
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
