import { type User as UserDescription, type Tag as TagDescription } from '../../types';
import changeFormatDate from '../../helpers/changeFormatDate';
import placeholderAvatar from './images/placeholderAvatar.png';
import placeholderImage from './images/placeholderImage.png';
import classes from './PostCard.module.scss';
import Tag from './components/Tag';

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
            <div className={classes.user}>
              <img
                className={classes.avatar}
                src={user.avatarUrl ?? placeholderAvatar}
                alt="avatar"
                draggable="false"
              />
              <div className={classes.info}>
                <p>{user.login}</p>
                <p>{changeFormatDate(createdAt)}</p>
              </div>
            </div>
            <p className={classes.text}>{content}</p>
          </div>
        </div>
        <ul className={classes.tagsBlock}>
          <Tag tags={tags}/>
        </ul>
      </li>
    </div>
  );
};

export default PostCard;
