import { combineReducers } from 'redux'
import appData from './dataReducer';

const appReducer = combineReducers({
	appData
});

export default appReducer;

