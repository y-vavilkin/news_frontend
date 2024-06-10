import { useLocation } from 'react-router-dom';
import { Box, ListItem, Typography } from '@mui/material';
import { memo } from 'react';

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

  return (
    <ListItem className={classes.container} sx={{ p: 0, width: 400 }}>
      <Box className={classes.post}>
        <Box className={classes.imageBlock}>
          <img
            className={classes.image}
            src={getImageUrlWithBase(imageUrl, CARD)}
            alt="image"
            draggable="false"
          />
        </Box>
        <Box className={classes.contentBlock}>
          <Typography variant="h6" className={classes.title}>{title}</Typography>
          <Box className={classes.content}>
            {isMainPagePath && (
              <User user={user} />
            )}
            <Typography className={classes.date}>{changeFormatDate(createdAt)}</Typography>
            <Typography className={classes.text}>{content}</Typography>
          </Box>
        </Box>
        <Tag tags={tags} />
      </Box>
    </ListItem>
  );
};

export default memo(PostCard);
