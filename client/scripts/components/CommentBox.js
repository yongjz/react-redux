import React from 'react';
import $ from 'jquery';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	handleCommentSubmit: function(comment) {
		var comments = this.state.data;
		comment.id = Date.now();
		var newComments = comments.concat([comment]);
		this.setState({data: newComments});

		this.props.addCommentClick(comment.id, comment.author, comment.text);

		$.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      type: 'POST',
	      data: comment,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	      	this.setState({data: comments});
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	},

	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer(), this.props.pollInterval);
	},

  render: function() {
    return (
        <div className="commentBox">
	      	<h1>Commentsssss</h1>
	      	<CommentList data={this.state.data} />
	      	<CommentForm onCommentSubmit={this.handleCommentSubmit} />
	    </div>
    );
  }
});

export default CommentBox
