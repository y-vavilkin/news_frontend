import { Box, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postsSearchReceived } from '../../redux/actions/posts';
import searchPosts from '../../helpers/searchPosts';
import { MAIN_PAGE, PROFILE_PAGE } from '../../constants';

const SearchField = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);
  const globalPosts = useAppSelector(state => state.posts.posts);
  const userPosts = useAppSelector(state => state.currentUser.userPosts);
  const page = useAppSelector(state => state.posts.page);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    switch (page) {
      case MAIN_PAGE:
        dispatch(postsSearchReceived(searchPosts(globalPosts, event.target.value, typeOfSearch)));
        break;
      case PROFILE_PAGE:
        dispatch(postsSearchReceived(searchPosts(userPosts, event.target.value, typeOfSearch)));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setInput('');
  }, [page]);

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
