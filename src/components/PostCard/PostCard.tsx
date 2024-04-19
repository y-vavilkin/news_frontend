import { type User as UserDescription, type Tag as TagDescription } from '../../types';

import placeholderImage from './images/placeholderImage.png';
import classes from './PostCard.module.scss';
import Tag from './components/Tag';
import User from './components/User';

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
            <User user={user} createdAt={createdAt}/>
            <p className={classes.text}>{content}</p>
          </div>
        </div>
        <Tag tags={tags} />
      </li>
    </div>
  );
};

export default PostCard;
