import React, { Component } from 'react';
import { combineReducers } from 'redux';
import commentsOp from './reducers';

const rootReducer = combineReducers({
	commentsOp
});

export default rootReducer;