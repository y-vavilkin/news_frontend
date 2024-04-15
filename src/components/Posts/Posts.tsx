import { useState, useEffect } from 'react';

import type { PostData } from './posts.interface';
import classes from './Posts.module.scss';
import mock from './mock.json';
import Post from './components/Post/Post';

const Posts = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    setPosts(mock);
  }, []);

  return (
    <div className={classes.container}>
      <ul className={classes.posts}>
        {posts.map((post: PostData) => {
          return <Post key={post.id} postData={post}/>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
