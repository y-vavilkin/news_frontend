import { List, ListItem } from '@mui/material';

import { Tag as TagDescription } from '../../interfaces/posts';

import classes from './Tag.module.scss';

export interface TagProps {
  tags: TagDescription[]
}

const Tag = ({ tags }: TagProps) => {
  return (
    <List className={classes.tagsBlock}>
      {tags.map(tag => <ListItem key={tag.id} className={classes.tag}>{`#${tag.text}`}</ListItem>)}
    </List>
  );
};

export default Tag;
