import React from 'react';
import TopMenuContainer from '../containers/TopMenuContainer';
import withAuth from '../hocs/withAuth';
import ArticleListContainer from './articleListContainer';

const ListPage = () => (
  <div>
    <TopMenuContainer />
    <ArticleListContainer />
  </div>
);

export default withAuth(ListPage);
