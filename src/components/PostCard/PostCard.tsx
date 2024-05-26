import { useLocation } from 'react-router-dom';
import { useCallback } from 'react';

import { changeFormatDate, getImageUrlWithBase } from '../../helpers';
import { User as UserDescription } from '../../interfaces/user';
import { Tag as TagDescription } from '../../interfaces/posts';
import { CARD } from '../../constants';
import User from '../User';
import Tag from '../Tag';

import classes from './PostCard.module.scss';

export interface PostProps {
  key: number
  id: number
  title: string
  content: string
  imageUrl: string | null
  createdAt: string
  user: UserDescription
  tags: TagDescription[]
}

const PostCard = ({
  imageUrl,
  title,
  createdAt,
  content,
  user,
  tags
}: PostProps) => {
  const location = useLocation();
  const isMainPagePath = location.pathname === '/';

  const getMemoizedImageUrl = useCallback(() => {
    return getImageUrlWithBase(imageUrl, CARD);
  }, [imageUrl]);

  return (
    <div className={classes.container}>
      <li className={classes.post}>
        <div className={classes.imageBlock}>
          <img
            className={classes.image}
            src={getMemoizedImageUrl()}
            alt="image"
            draggable="false"
          />
        </div>
        <div className={classes.contentBlock}>
          <h1 className={classes.title}>{title}</h1>
          <div className={classes.content}>
            {isMainPagePath && (
              <User user={user} />
            )}
            <p>{changeFormatDate(createdAt)}</p>
            <p className={classes.text}>{content}</p>
          </div>
        </div>
        <Tag tags={tags} />
      </li>
    </div>
  );
};

export default PostCard;
