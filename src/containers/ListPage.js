import React from 'react';
import { Link } from 'react-router-dom';
import TopMenuContainer from '../containers/TopMenuContainer';
import withAuth from '../hocs/withAuth';
import ArticleListContainer from './articleListContainer';

const ListPage = () => (
  <div>
    <TopMenuContainer />
    <Link to="/newacticle">새 게시물 </Link>
    <ArticleListContainer />
  </div>
);

export default withAuth(ListPage);
