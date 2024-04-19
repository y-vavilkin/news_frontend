import { Tag as TagDescription } from '../../../../types';
import classes from './Tag.module.scss';

export interface TagProps {
  tags: TagDescription[]
}

const Tag = ({ tags }: TagProps) => {
  return (
    tags.map(tag =>
      <li key={tag.id} className={classes.tag}>{tag.text}</li>)
  );
};

export default Tag;
