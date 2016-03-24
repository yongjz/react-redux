import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommentBox from '../components/CommentBox';
import { addComment } from '../actions';
//import * as CommentActions from '../actions'

class App extends Component {
  render() {
    const { comments, addCommentClick } = this.props;
    console.log(comments);
    console.log(addCommentClick);
    return (
      <div>
        <CommentBox 
        	url="/api/comments" 
        	pollInterval={2000} 
        	addCommentClick={addCommentClick}
       	/>
      </div>
    )
  }
}

// App.propTypes = {
//   comments: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// }


const mapStateToProps = (state) => {
  //console.log(state)
  return {
    comments: state.commentsOp
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(CommentActions, dispatch)
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentClick: (id, author, text) => {
      dispatch(addComment(id, author, text))
    }
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)