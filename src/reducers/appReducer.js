// @flow
import {toggleModal, setCurrentUser} from './reducers';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  modalVisible: toggleModal,
  currentUser: setCurrentUser
});

export default appReducer;
