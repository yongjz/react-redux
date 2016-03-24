const initialState = {
  commentsData: [
  	{
		id: 0,
	    author: 'yongjz',
	    text: 'Hello Redux',
	}
  ]
};

const commentsOp = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_COMMENT':
			return Object.assign({}, state, {
				commentsData: [
					...state.commentsData,
					{
						id: action.id,
				        author: action.author,
				        text: action.text,
					}
				]
		    })
		default:
	      return state
	}
};

export default commentsOp;