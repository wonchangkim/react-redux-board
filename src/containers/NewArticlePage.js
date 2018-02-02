import React from 'react';
import TopMenuContainer from '../containers/TopMenuContainer';
import withAuth from '../hocs/withAuth';
import ArticleFormContainer from './ArticleFormContainer';

const NewArticlePage = () => (
  <div>
    <TopMenuContainer />
    <ArticleFormContainer />
  </div>
);

export default withAuth(NewArticlePage);
