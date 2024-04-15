import { type User as UserDescription } from '../../types';
import changeFormatDate from '../../helpers/changeFormatDate';

import Tag, { type TagProps as TagDescription } from './components/Tag';
import classes from './PostCard.module.scss';
import placeholderImage from './images/placeholderImage.png';
import placeholderAvatar from './images/placeholderAvatar.png';

export interface PostProps {
  id: number
  title: string
  content: string
  userId: number
  imageUrl: string | null
  createdAt: string
  user: UserDescription
  tags: TagDescription[]
}

const PostCard = ({ id, imageUrl, title, createdAt, content, user, tags }: PostProps) => {
  return (
    <li key={id} className={classes.post}>
      <div className={classes.imageBlock}>
        <img className={classes.image} src={imageUrl ?? placeholderImage} alt="image" />
      </div>
      <div className={classes.contentBlock}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.content}>
          <div className={classes.user}>
            <img className={classes.avatar} src={user.avatarUrl ?? placeholderAvatar} alt="avatar" />
            <div className={classes.info}>
              <p>{user.login}</p>
              <p>{changeFormatDate(createdAt)}</p>
            </div>
          </div>
          <p className={classes.text}>{content}</p>
        </div>
      </div>
      <ul className={classes.tagsBlock}>
        {tags.map((tagData: TagDescription) => <Tag key={tagData.id} {...tagData}/>)}
      </ul>
    </li>
  );
};

export default PostCard;
