import { postsSearchReceived } from '../redux/actions/posts';
import { MAIN_PAGE, PROFILE_PAGE } from '../constants';
import { AppDispatch } from '../redux/store';
import { Post } from '../interfaces/posts';

import searchPosts from './searchPosts';

const dispatchSearch = (
  dispatch: AppDispatch,
  page: string,
  text: string,
  type: string,
  globalPosts: Post[],
  userPosts: Post[]
): void => {
  switch (page) {
    case MAIN_PAGE:
      dispatch(postsSearchReceived(searchPosts(globalPosts, text, type)));
      break;
    case PROFILE_PAGE:
      dispatch(postsSearchReceived(searchPosts(userPosts, text, type)));
      break;
    default:
      break;
  }
};

export default dispatchSearch;
