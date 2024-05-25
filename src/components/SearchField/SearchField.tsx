import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postsSetInput } from '../../redux/actions/posts';

const SearchField = () => {
  const dispatch = useAppDispatch();

  const [hasMounted, setHasMounted] = useState(false);
  const inputField = useRef<HTMLInputElement>(null);

  const inputText = useAppSelector(state => state.posts.input);
  const typeOfSearch = useAppSelector(state => state.posts.typeOfSearch);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(postsSetInput(event.target.value));
  };

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
    } else {
      if (inputField.current !== null) {
        inputField.current.focus();
      }
    }
  }, [typeOfSearch]);

  return (
    <Box>
      <TextField
        placeholder="Search"
        variant="outlined"
        value={inputText}
        onChange={handleChange}
        inputRef={inputField}
      />
    </Box>
  );
};

export default SearchField;
