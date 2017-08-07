// @flow
import {toggleModal} from './reducers';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  modalVisible: toggleModal
});

export default appReducer;
