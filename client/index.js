import ReactDOM from 'react-dom';
import React from 'react';
import marked from 'marked';
import CommentBox from './scripts/components/CommentBox';
import './css/base.css';

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
