import { Box, List } from '@mui/material';
import { useEffect } from 'react';

import { commentsRequested } from '../../redux/actions/comments';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { EMPTY_COMMENTS } from '../../constants';
import CommentInput from '../CommentInput';
import Comment from '../Comment/Comment';
import Loader from '../Loader';
import Notify from '../Notify';

import classes from './CommentsList.module.scss';

const CommentsList = () => {
  const dispatch = useAppDispatch();

  const currentUserId = useAppSelector(state => state.auth.authUser?.id);
  const isLoading = useAppSelector(state => state.comments.isLoading);
  const comments = useAppSelector(state => state.comments.comments);
  const isNotEmpty = comments.length > 0;

  useEffect(() => {
    dispatch(commentsRequested());
  }, []);

  if (isLoading) {
    return (
      <Box className={classes.list}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box className={classes.list}>
      <CommentInput />
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
    </Box>
  );
};

export default CommentsList;
