import { AUTHORS, TAGS, TITLE } from '../constants';
import { Post } from '../interfaces/posts';

const searchPosts = (posts: Post[], searchData: string, typeOfSearch: string) => {
  switch (typeOfSearch) {
    case TITLE: {
      return posts.filter((post) => post.title.includes(searchData));
    }
    case TAGS: {
      return posts.filter((post) => {
        return post.tags.find((tag) => {
          return tag.text.includes(searchData);
        });
      });
    }
    case AUTHORS: {
      return posts.filter((post) => post.user.login.includes(searchData));
    }
    default: {
      return posts.filter((post) => {
        return post.title.includes(searchData) ||
        post.user.login.includes(searchData) ||
        post.tags.find((tag) => {
          return tag.text.includes(searchData);
        });
      });
    }
  }
};

export default searchPosts;
