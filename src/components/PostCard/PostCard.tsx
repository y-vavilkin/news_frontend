import { Delete, Edit } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

import placeholderImage from '../../assets/placeholderImage.webp';
import { User as UserDescription } from '../../interfaces/auth';
import { Tag as TagDescription } from '../../interfaces/posts';
import { useAppSelector } from '../../redux/hooks';
import { compareUserId } from '../../helpers';

import classes from './PostCard.module.scss';
import Tag from './components/Tag';
import User from './components/User';

export interface PostProps {
  key: number
  id: number
  userId: number
  title: string
  content: string
  imageUrl: string | null
  createdAt: string
  user?: UserDescription
  tags: TagDescription[]
}

const PostCard = ({
  userId,
  imageUrl,
  title,
  createdAt,
  content,
  user,
  tags
}: PostProps) => {
  const id = useAppSelector(state => state.auth.user?.id);
  const location = useLocation();
  const isProfilePath = location.pathname.startsWith('/users/');
  const isMainPagePath = location.pathname.startsWith('/');
  const isLoadingUser = user !== undefined;
  const isUserProfile = compareUserId(userId, id);

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
            {
              isMainPagePath && isLoadingUser && (
                <User user={user} createdAt={createdAt}/>
              )
            }
            <p className={classes.text}>{content}</p>
          </div>
        </div>
        <Tag tags={tags} />
        {
          isProfilePath && isUserProfile && (
            <div className={classes.buttons}>
              <Button variant="contained" startIcon={<Delete />}>Delete</Button>
              <Button variant="contained" startIcon={<Edit />}>Edit</Button>
            </div>
          )
        }
      </li>
    </div>
  );
};

export default PostCard;
