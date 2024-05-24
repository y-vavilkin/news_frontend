import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

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
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const page = useAppSelector(state => state.posts.page);
  const isNotMainPage = page !== MAIN_PAGE;

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(postsSetType(event.target.value));
  };

  const menuList = [
    { id: 1, value: ALL, onlyOnMainPage: false },
    { id: 2, value: TITLE, onlyOnMainPage: false },
    { id: 3, value: TAGS, onlyOnMainPage: false },
    { id: 4, value: AUTHORS, onlyOnMainPage: true }
  ];

  return (
    <Box className={classes.box}>
      <FormControl fullWidth>
        <Select
          value={typeOfSearch}
          onChange={handleChange}
        >
          {menuList.filter((menuItem) => {
            if (isNotMainPage) {
              return !menuItem.onlyOnMainPage;
            } else {
              return true;
            }
          }).map((menuItem) => {
            return (
              <MenuItem key={menuItem.id} value={menuItem.value}>
                {menuItem.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FiltersField;
