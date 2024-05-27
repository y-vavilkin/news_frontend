import { Box, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postsSearch } from '../../redux/actions/posts';

const SearchField = () => {
  const dispatch = useAppDispatch();

  const textForSearch = useAppSelector(state => state.posts.textForSearch);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(postsSearch({ textForSearch: event.target.value }));
  };

  return (
    <Box>
      <TextField
        placeholder="Search"
        variant="outlined"
        value={textForSearch}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchField;
