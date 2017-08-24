import { TOGGLE_MODAL, SET_USER } from '../constants/actionTypes';
import {initialState} from '../config';

export function toggleModal (state = initialState.modalVisible, action) {
  const {type, data} = action;
  return type !== TOGGLE_MODAL ? state : (
    data.visible
  );
}

export function setCurrentUser (state = initialState.currentUser, action) {
  const {type, data} = action;
  return type !== SET_USER ? state : (
    data
  );
}
