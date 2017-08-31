import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
// the function connect will pass props into the commponent (in this case Main)
const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
