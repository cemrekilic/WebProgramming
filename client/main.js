
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';

import allReducers from './reducers/index.js'
import { routerForBrowser } from 'redux-little-router';


const routes = {

	'/': {
	  title: 'Home',
	  '/order': {
		title: 'Orders',
		'/:id': {
		  title: 'Order :'
		}
	  }
	}
  };
  const { reducer, middleware, enhancer } = routerForBrowser({
	routes
  });
  const clientOnlyStore = createStore(
	combineReducers({ router: reducer, allReducers }),
	compose(enhancer, applyMiddleware(middleware))
  );

ReactDOM.render(
	<Provider store={clientOnlyStore}>
	</Provider>,
	document.getElementById('root')
)