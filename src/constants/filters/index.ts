export const AUTHORS = 'AUTHORS';
export const TITLE = 'TITLE';
export const TAGS = 'TAGS';
export const ALL = 'ALL';

const menuList = [
  { id: 1, value: ALL, onlyOnMainPage: false },
  { id: 2, value: TITLE, onlyOnMainPage: false },
  { id: 3, value: TAGS, onlyOnMainPage: false },
  { id: 4, value: AUTHORS, onlyOnMainPage: true }
];

export default menuList;
