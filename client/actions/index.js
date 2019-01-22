export const getProductData = ()=>{
	return dispatch => fetch('/get_product_data')// redux thunk handle these
	.then((res)=>{
		return res.json()
	})
	.then(
		products => dispatch({
			type:"GET_PRODUCT_DATA",
			payload : products 
		})
	)
}
export const getUpdatedProduct = (products,product, index)=>{
	
	return{
		type :"GET_UPDATED_PRODUCT",
		products : products,
		payload : product,
		product_index : index
	}
}
export const enableUpdate = (product, index)=>{
	
	return{
		type :"ENABLE_UPDATE",
		product : product,
		payload : true,
		adding:false,
		index : index
	}
}

export const updateProduct = (product, index)=>{
	return dispatch => fetch('/update_product',{
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type':  'application/json'
		},
		credentials: "same-origin", method:'POST', body : JSON.stringify(product)
	})// redux thunk handle these
	.then((res)=>{
		return res.json()
	})
	.then(
		product => dispatch({
			type:"UPDATE_PRODUCT",
			payload : product,
			updating : false,
			adding:false,
			product_index : index
		})
	)
}

export const addCartProduct = (cartData, product)=>{
	
	return{
		type :"ADD_CART_PRODUCT",
		cartData : cartData,
		payload : product 
	}
}

export const enableAddProduct = (product)=>{
	
	return{
		type :"ENABLE_ADD_PRODUCT",
		product : product.product,
		updating : product.updating,
		adding : true
	}
}



export const addProduct = (product)=>{

	return dispatch => fetch('/add_product',{
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type':  'application/json'
		},
		credentials: "same-origin", method:'POST', body : JSON.stringify(product)
	})// redux thunk handle these
	.then((res)=>{

		return res.json()
	})
	.then(
		data => dispatch({
			type:"ADD_PRODUCT",
			payload : data,
			updating : false,
			adding : false
		})
	)
}

export const getAddedProduct = (products, product)=>{

	return{
		type :"GET_ADDED_PRODUCT",
		products : products,
		payload : product,
	}
}

export const deleteProduct = (product, index)=>{

	return dispatch => fetch('/delete_product',{
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type':  'application/json'
		},
		credentials: "same-origin", method:'POST', body : JSON.stringify(product)
	})// redux thunk handle these
	.then((res)=>{

		return res.json()
	})
	.then(
		data => dispatch({
			type:"DELETE_PRODUCT",
			payload : data,
			updating : false,
			adding : false,
			index : index
		})
	)
}


export const getDeletedProduct = (products, product)=>{
	
	return{
		type :"GET_DELETED_PRODUCT",
		products : products,
		payload : product,
	}
}
