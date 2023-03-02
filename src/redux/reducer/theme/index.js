import {THEME_CHANGE} from '../../../utils/constant';

const initialState = {
  mode: 'light',
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {...state, mode: action.payload};
    default:
      return state;
  }
};
