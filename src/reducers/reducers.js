import { TOGGLE_MODAL } from '../constants/actionTypes';
import {initialState} from '../config';

export function toggleModal (state = initialState.modalVisible, action) {
  const {type, data} = action;
  return type !== TOGGLE_MODAL ? state : (
    data.visible
  );
}
