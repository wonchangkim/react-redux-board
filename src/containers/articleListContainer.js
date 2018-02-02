import { connect } from 'react-redux'; // Proviser 와 connect 는 react-redux안에 있다.
import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';
import withLoading from '../hocs/withLoading';

const ArticleListWithLoading = withLoading(ArticleList);

class ArticleListContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }
  componentDidMount() {
    this.props.onMount();
  }
  // props을 빼고 넘길때
  render() {
    const { onMount, ...rest } = this.props;
    return (
      <ArticleListWithLoading {...rest} />
    );
  }
}
export default connect(
  // mapStateToProps
  state => ({
    articles: state.articleList.articles,
    loading: state.articleList.loading,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleListContainer);
