import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import root reducer
import rootReducer from './reducers/index';
// import seed files
import comments from './data/comments';
import posts from './data/posts';
//create object from seed file
const defaultState = {
    posts,
    comments
};
// create store need two params
const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
