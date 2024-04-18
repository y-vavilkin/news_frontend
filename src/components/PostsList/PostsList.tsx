import PostCard, { type PostProps } from '../PostCard';
import EmptyPosts from '../EmptyPosts/EmptyPosts';

interface PostsProps {
  postsData: PostProps[]
}

const PostsList = ({ postsData }: PostsProps) => {
  return (
    <>
      {postsData.length !== 0
        ? postsData.map((post) => <PostCard key={post.id} {...post}/>)
        : <EmptyPosts/>}
    </>
  );
};

export default PostsList;
