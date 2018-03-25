import { createStore } from 'redux'

import appReducer from './redux/reducers';

export default function configureStore() {
	let store = createStore(appReducer);
	return store;
};
