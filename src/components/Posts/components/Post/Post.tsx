import type { PostData, TagData } from '../../posts.interface';

import Tag from './components/Tag/Tag';
import classes from './Post.module.scss';
import placeholderImage from './images/placeholderImage.png';
import placeholderAvatar from './images/placeholderAvatar.png';

const Post = (props: { postData: PostData }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    };
    return new Date(dateString).toLocaleDateString('en-EN', options);
  };

  return (
    <li key={props.postData.id} className={classes.post}>
      <div className={classes.imageBlock}>
        <img className={classes.image} src={props.postData.imageUrl ?? placeholderImage} alt="image" />
      </div>
      <div className={classes.contentBlock}>
        <h1 className={classes.title}>{props.postData.title}</h1>
        <div className={classes.content}>
          <div className={classes.user}>
            <img className={classes.avatar} src={props.postData.user.avatarUrl ?? placeholderAvatar} alt="avatar" />
            <div className={classes.info}>
              <p>{props.postData.user.login}</p>
              <p>{formatDate(props.postData.createdAt)}</p>
            </div>
          </div>
          <p className={classes.text}>{props.postData.content}</p>
        </div>
      </div>
      <ul className={classes.tagsBlock}>
        {props.postData.tags.map((tagData: TagData) => {
          return (
            <Tag key={tagData.id} tag={tagData}/>
          );
        })}
      </ul>
    </li>
  );
};

export default Post;
