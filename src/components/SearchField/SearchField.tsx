import { ChangeEvent, useEffect } from 'react';
import { Box, TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postsSetInput } from '../../redux/actions/posts';

const SearchField = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.posts.page);
  const inputText = useAppSelector(state => state.posts.input);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    dispatch(postsSetInput(text));
  };

  useEffect(() => {
    dispatch(postsSetInput(''));
  }, [page]);

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
