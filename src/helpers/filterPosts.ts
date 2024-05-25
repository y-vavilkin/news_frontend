import { AUTHORS, TAGS, TITLE } from '../constants';
import { Post } from '../interfaces/posts';

const filterPosts = (posts: Post[], searchData: string, typeOfSearch: string) => {
  const text = searchData.toLowerCase();

  switch (typeOfSearch) {
    case TITLE: {
      return posts.filter((post) => post.title.toLowerCase().includes(text));
    }
    case TAGS: {
      return posts.filter((post) => {
        return post.tags.find((tag) => {
          return tag.text.toLowerCase().includes(text);
        });
      });
    }
    case AUTHORS: {
      return posts.filter((post) => post.user?.login.includes(text));
    }
    default: {
      return posts.filter((post) => {
        return post.title.toLowerCase().includes(text) ||
        post.user?.login.toLowerCase().includes(text) ||
        post.tags.find((tag) => {
          return tag.text.toLowerCase().includes(text);
        });
      });
    }
  }
};

export default filterPosts;
