import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ActicleList from '../src/components/ArticleList';


const articles = [
  {
    id: 'acticle0',
    title: '게시글 제목',
    createdAt: 1517453827525,
    nickName: '벼얼명',
  },
  {
    id: 'acticle1',
    title: '게시글 제목1',
    createdAt: 1517453827525,
    nickName: '벼얼명',
  },
];
// ({}) 는 객체가 된다.
const articelsWithLink = articles.map(articel => ({
  ...articel,
  itemProps: {
    as: 'a',
    href: 'https://www.google.com',
  },
}));
storiesOf('ActicleList', module)
  .add('default', () => (<ActicleList articles={articles} />))
  .add('links', () => (<ActicleList articles={articelsWithLink} />));
