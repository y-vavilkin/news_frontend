import PostCard, { type PostProps } from '../PostCard';

import classes from './PostsList.module.scss';

interface PostsProps {
  postsData: PostProps[]
}

const PostsList = ({ postsData }: PostsProps) => {
  return (
    <div className={classes.container}>
      <ul className={classes.posts}>
        {postsData.map((post) => <PostCard key={post.id} {...post}/>)}
      </ul>
    </div>
  );
};

export default PostsList;
