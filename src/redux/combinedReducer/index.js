import {combineReducers} from 'redux';
import {informationReducer} from '../reducer';
import {themeReducer} from '../reducer/theme';

export const combinedReducers = combineReducers({
  themeReducer,
  informationReducer,
});
