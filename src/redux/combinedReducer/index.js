import {combineReducers} from 'redux';
import { informationReducer } from '../reducer';


export const combinedReducers = combineReducers({
  informationReducer,
});
