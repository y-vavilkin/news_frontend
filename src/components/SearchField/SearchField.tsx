import { Box, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postsSetInput } from '../../redux/actions/posts';

const SearchField = () => {
  const dispatch = useAppDispatch();
  const inputText = useAppSelector(state => state.posts.input);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(postsSetInput(event.target.value));
  };

  return (
    <Box>
      <TextField
        placeholder="Search"
        variant="outlined"
        value={inputText}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchField;
