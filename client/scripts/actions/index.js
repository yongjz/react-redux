/*
 * action types
 */
export const ADD_COMMENT = 'ADD_COMMENT';

/*
 * action creators
 */
export const addComment = (id, author, text) => {
	return {
		type: ADD_COMMENT,
		id,
		author,
		text
	}
}
