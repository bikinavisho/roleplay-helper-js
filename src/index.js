import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import initStore from "./redux/initStore";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = initStore();

ReactDOM.render(
	<CookiesProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</Provider>
	</CookiesProvider>,
	document.getElementById('root'));
registerServiceWorker();
