import { useMemo } from 'react';

import { useAppSelector } from '../hooks';
import { Tag } from '../interfaces/posts';

const usePost = (postId: number): { title: string, content: string, tags: string } => {
  const userPosts = useAppSelector(state => state.currentUser.userPosts);

  const post = useMemo(() => {
    return userPosts.find(post => post.id === postId);
  }, [postId, userPosts]);

  if (post) {
    const tagsString = post.tags.map((tag: Tag) => tag.text).join(',');
    return {
      title: post.title,
      content: post.content,
      tags: tagsString
    };
  } else {
    return {
      title: '',
      content: '',
      tags: ''
    };
  }
};

export default usePost;
