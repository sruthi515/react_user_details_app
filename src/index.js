import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import userDetailsApp from './reducers'
import './index.css';

let store = createStore(userDetailsApp,applyMiddleware(thunk))

ReactDOM.render(
   <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
   </Provider>, document.getElementById('root')
);
