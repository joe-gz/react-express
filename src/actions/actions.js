import { TOGGLE_MODAL, SET_USER } from '../constants/actionTypes';

export function toggleModal (data) {
  return { type: TOGGLE_MODAL, data };
}

export function setCurrentUser (data) {
  console.log(data);
  return { type: SET_USER, data };
}
