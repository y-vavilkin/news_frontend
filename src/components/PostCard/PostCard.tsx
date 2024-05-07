import { useLocation } from 'react-router-dom';

import placeholderImage from '../../assets/placeholderImage.webp';
import { User as UserDescription } from '../../interfaces/user';
import { Tag as TagDescription } from '../../interfaces/posts';
import { changeFormatDate } from '../../helpers';
import User from '../User';
import Tag from '../Tag';

import classes from './PostCard.module.scss';

export interface PostProps {
  key: number
  id: number
  userId: number
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

  return (
    <div className={classes.container}>
      <li className={classes.post}>
        <div className={classes.imageBlock}>
          <img
            className={classes.image}
            src={imageUrl ?? placeholderImage}
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
