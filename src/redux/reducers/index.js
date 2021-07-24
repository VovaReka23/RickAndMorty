import { combineReducers } from 'redux';
import * as Reducers from './rootReducer'

const rootReducer = combineReducers({ ...Reducers });

export default rootReducer;
