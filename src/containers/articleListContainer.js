import { connect } from 'react-redux'; // Proviser 와 connect 는 react-redux안에 있다.
import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';
import withLoading from '../hocs/withLoading';

export default connect(
  // mapStateToProps
  state => ({
    articles: state.articleList.articles,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(withLoading(ArticleList));
