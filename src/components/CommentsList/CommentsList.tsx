import { Box, List, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect } from 'react';

import { commentsRequest } from '../../redux/actions/comments';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { EMPTY_COMMENTS } from '../../constants';
import Comment from '../Comment/Comment';
import Loader from '../Loader';
import Notify from '../Notify';

import classes from './CommentsList.module.scss';

const CommentsList = () => {
  const dispatch = useAppDispatch();

  const currentUserId = useAppSelector(state => state.currentUser.user?.id ?? -1);
  const isLoading = useAppSelector(state => state.comments.isLoading);
  const comments = useAppSelector(state => state.comments.comments);
  const isNotEmpty = comments.length > 0;

  useEffect(() => {
    dispatch(commentsRequest());
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Box className={classes.list}>
      <List>
        {isNotEmpty
          ? comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                text={comment.text}
                updatedAt={comment.updatedAt}
                user={comment.user}
                isVisibleActions={currentUserId === comment.user.id}
              />
            );
          })
          : <Notify info={EMPTY_COMMENTS} status={'info'} />}
      </List>
      <Stack>
        <TextField
          placeholder='Create comment'
          fullWidth
          multiline
          maxRows={4}
        />
        <LoadingButton
          variant="contained"
        >
          create
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default CommentsList;
