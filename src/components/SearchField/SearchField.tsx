import { Box, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postsSearchReceived } from '../../redux/actions/posts';
import searchPosts from '../../helpers/searchPosts';

const SearchField = () => {
  const dispatch = useAppDispatch();
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const posts = useAppSelector(state => state.posts.posts);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(postsSearchReceived(searchPosts(posts, event.target.value, typeOfSearch)));
  };

  return (
    <Box>
      <TextField
        placeholder="Search"
        variant="outlined"
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchField;
