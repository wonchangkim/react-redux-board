import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
import LoginScreenContainer from './containers/LoginScreenContainer';
import ListPage from './containers/ListPage';
import NewArticlePage from './containers/NewArticlePage';
import withAuth from './hocs/withAuth';
import rootReducer from './ducks/';

const store = createStore(rootReducer, applyMiddleware(thunk));
const Home = withAuth(() => <Redirect to="/list" />);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={LoginScreenContainer} />
            <Route path="/list" component={ListPage} />
            <Route path="/newacticle" component={NewArticlePage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
