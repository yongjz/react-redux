// import ReactDOM from 'react-dom';
// import React from 'react';
// import marked from 'marked';
// import CommentBox from './scripts/components/CommentBox';
// import './css/base.css';

// ReactDOM.render(
//   <CommentBox url="/api/comments" pollInterval={2000} />,
//   document.getElementById('root')
// );

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './scripts/reducers'
import App from './scripts/containers/App'

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)