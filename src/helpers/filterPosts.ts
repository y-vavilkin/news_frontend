import { AUTHORS, TAGS, TITLE } from '../constants/filters';
import { Post } from '../interfaces/posts';

const filterByTitle = (post: Post, text: string) => {
  return post.title.toLowerCase().includes(text);
};

const filterByTags = (post: Post, text: string) => {
  return post.tags.some((tag) => tag.text.toLowerCase().includes(text));
};

const filterByAuthors = (post: Post, text: string) => {
  return post.user?.login.toLowerCase().includes(text);
};

const filterPosts = (posts: Post[], searchData: string, typeOfSearch: string) => {
  const text = searchData.toLowerCase();

  switch (typeOfSearch) {
    case TITLE:
      return posts.filter((post) => filterByTitle(post, text));
    case TAGS:
      return posts.filter((post) => filterByTags(post, text));
    case AUTHORS:
      return posts.filter((post) => filterByAuthors(post, text));
    default:
      return posts.filter((post) =>
        filterByTitle(post, text) ||
        filterByAuthors(post, text) ||
        filterByTags(post, text)
      );
  }
};

export default filterPosts;
