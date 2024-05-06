import PostCard, { type PostProps } from '../PostCard';

import classes from './PostsList.module.scss';

interface PostsListProps {
  postsData: PostProps[]
}

const PostsList = ({ postsData }: PostsListProps) => {
  return (
    <div className={classes.posts}>
      {
        postsData.map((post) =>
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            imageUrl={post.imageUrl}
            title={post.title}
            createdAt={post.createdAt}
            content={post.content}
            user={post.user}
            tags={post.tags}
          />
        )
      }
    </div>
  );
};

export default PostsList;
