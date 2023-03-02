import {THEME_CHANGE} from '../../utils/constant';

export const switchMode = mode => {
  return {
    type: THEME_CHANGE,
    payload: mode,
  };
};
