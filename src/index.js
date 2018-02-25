import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import initStore from "./redux/initStore";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = initStore();

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
