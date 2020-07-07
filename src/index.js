import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

import userDetailsApp from './reducers';
import App from './App';

let store = createStore(userDetailsApp,applyMiddleware(thunk));

ReactDOM.render(
   <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
   </Provider>, document.getElementById('root')
);
