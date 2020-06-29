import {createStore, applyMiddleware} from 'redux';
import imagesListReducer from '../reducers/imagesListReducers';
import thunk from 'redux-thunk';

const store = createStore(imagesListReducer, applyMiddleware(thunk));

export default store;
