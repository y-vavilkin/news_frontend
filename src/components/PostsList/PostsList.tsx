import { Pagination, Stack } from '@mui/material';
import { ChangeEvent, useState } from 'react';

import PostCard, { type PostProps } from '../PostCard';
import { COUNT_POSTS } from '../../constants';

import classes from './PostsList.module.scss';

interface PostsListProps {
  postsData: PostProps[]
}

const PostsList = ({ postsData }: PostsListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(postsData.length / COUNT_POSTS);

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const displayedPosts = postsData.slice(
    (currentPage - 1) * COUNT_POSTS,
    currentPage * COUNT_POSTS);

  return (
    <div className={classes.root}>
      <div className={classes.posts}>
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
      </div>
      <Stack spacing={2} className={classes.pagination}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          color="secondary"
          size="large"
        />
      </Stack>
    </div>
  );
};

export default PostsList;
