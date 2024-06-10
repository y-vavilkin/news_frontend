import { useMemo } from 'react';

import { useAppSelector } from '../hooks';
import { Tag } from '../interfaces/posts';

const usePost = (postId: number): [string, string, string] | [null, null, null] => {
  const userPosts = useAppSelector(state => state.currentUser.userPosts);

  const post = useMemo(() => {
    return userPosts.find(post => post.id === postId);
  }, [postId, userPosts]);

  if (post) {
    const tagsString = post.tags.map((tag: Tag) => tag.text).join(',');
    return [post.title, post.content, tagsString];
  } else {
    return [null, null, null];
  }
};

export default usePost;
