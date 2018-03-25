import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ConfigureStore from './js/services/ConfigureStore';

const store = ConfigureStore();

const EmployeesListApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<EmployeesListApp />, document.getElementById('root'));

registerServiceWorker();
