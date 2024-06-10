import { Box, List, Pagination, Stack } from '@mui/material';
import { ChangeEvent } from 'react';

import usePagination from '../../hooks/pagination';
import { COUNT_POSTS } from '../../constants';
import PostCard, { type PostProps } from '../PostCard';

import classes from './PostsList.module.scss';

interface PostsListProps {
  postsData: PostProps[]
}

const PostsList = ({ postsData }: PostsListProps) => {
  const [
    displayedPosts,
    totalPages,
    currentPage,
    setCurrentPage
  ] = usePagination(postsData, COUNT_POSTS);

  const handleChangePage = (_event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box className={classes.root}>
      <List component="ul" className={classes.posts}>
        {displayedPosts.map((post) =>
          <PostCard
            key={post.id}
            id={post.id}
            imageUrl={post.imageUrl}
            title={post.title}
            createdAt={post.createdAt}
            content={post.content}
            user={post.user}
            tags={post.tags}
          />
        )}
      </List>
      <Stack spacing={2} className={classes.pagination}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          color="secondary"
          size="large"
        />
      </Stack>
    </Box>
  );
};

export default PostsList;
