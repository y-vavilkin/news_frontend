import { Tag as TagDescription } from '../../../../interfaces/posts';

import classes from './Tag.module.scss';

export interface TagProps {
  tags: TagDescription[]
}

const Tag = ({ tags }: TagProps) => {
  return (
    <ul className={classes.tagsBlock}>
      {
        tags.map(tag => <li key={tag.id} className={classes.tag}>{tag.text}</li>)
      }
    </ul>
  );
};

export default Tag;
