import { Alert, CircularProgress } from '@mui/material';

import { useAppSelector } from '../../redux/hooks/hooks';

import PostCard, { type PostProps } from '../PostCard';
import EmptyPosts from '../EmptyPosts/EmptyPosts';

import classes from './PostsList.module.scss';

interface PostsProps {
  postsData: PostProps[]
}

const PostsList = ({ postsData }: PostsProps) => {


  



  return (
    <div className={classes.container}>
      <ul className={classes.posts}>
        {isError !== null
          ? <Alert severity="error">{isError}</Alert>
          : postsData.length !== 0
            ? postsData.map((post) => <PostCard key={post.id} {...post}/>)
            : <EmptyPosts/>
        }
      </ul>
    </div>
  );
};

export default PostsList;
