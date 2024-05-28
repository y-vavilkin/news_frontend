import { MenuItem } from '../../interfaces/posts';

export const AUTHORS = 'AUTHORS';
export const TITLE = 'TITLE';
export const TAGS = 'TAGS';
export const ALL = 'ALL';

const menuList: MenuItem[] = [
  { id: 1, value: ALL },
  { id: 2, value: TITLE },
  { id: 3, value: TAGS },
  { id: 4, value: AUTHORS }
];

export default menuList;
