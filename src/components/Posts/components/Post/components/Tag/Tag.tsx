import type { TagData } from '../../../../posts.interface';

import classes from './Tag.module.scss';

const Tag = (props: { tag: TagData }) => {
  return (
    <li key={props.tag.id} className={classes.tag}>{props.tag.text}</li>
  );
};

export default Tag;
