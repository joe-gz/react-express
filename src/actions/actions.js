import { TOGGLE_MODAL } from '../constants/actionTypes';

export function toggleModal (data) {
  return { type: TOGGLE_MODAL, data };
}
