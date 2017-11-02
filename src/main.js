import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import SearchReducer from './reducers/search';
import Search from './components/search/search';
import List from './components/list/list';
import Pagination from './components/pagination/pagination';

class Figme extends Component {

  render () {
    return <div>
      <Search store={store} />
      <List store={store} />
      <Pagination store={store} />
    </div>
  }

}

const store = createStore(SearchReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Figme />
  </Provider>,
  document.getElementById('figme-app')
);
