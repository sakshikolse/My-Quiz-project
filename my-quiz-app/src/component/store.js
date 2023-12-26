import { createStore,applyMiddleware } from 'redux';
import quizReducer from './quizReducer'; 
import allActions from './actions';
import {thunk} from 'redux-thunk';
const store = createStore(quizReducer,applyMiddleware(thunk));
export default store;
export { allActions }; 