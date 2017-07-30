import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
// combind the action;
// 3 things living in the routing, posts, comments, routing(the change between pages )
// All reducers are ran when you run a reducer!
const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;
