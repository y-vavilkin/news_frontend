import { ChangeEvent, useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import dispatchSearch from '../../helpers/dispatchSearch';

const SearchField = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const globalPosts = useAppSelector(state => state.posts.posts);
  const userPosts = useAppSelector(state => state.currentUser.userPosts);
  const page = useAppSelector(state => state.posts.page);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInput(text);
    dispatchSearch(dispatch, page, text, typeOfSearch, globalPosts, userPosts);
  };

  useEffect(() => {
    setInput('');
  }, [page]);

  useEffect(() => {
    dispatchSearch(dispatch, page, input, typeOfSearch, globalPosts, userPosts);
  }, [typeOfSearch]);

  return (
    <Box>
      <TextField
        placeholder="Search"
        variant="outlined"
        value={input}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchField;
