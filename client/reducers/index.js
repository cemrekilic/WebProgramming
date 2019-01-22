import {combineReducers} from 'redux'

import productReducer from './products_reducer.js'
import cartReducer from './cart_reducer.js'
import adminProductReducer from './adminProducts_reducer.js'
const allReducers = combineReducers({
	productData : productReducer,
	cartData : cartReducer,
	productAdminData : adminProductReducer,
})

export default allReducers