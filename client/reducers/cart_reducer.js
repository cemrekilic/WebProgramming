export default function (state = {products : []}, action ){

	switch (action.type){
		case "ADD_CART_PRODUCT" : 
			let products = action.cartData.products
			products.push(action.payload)
			
			let payload = {products : products}


			
			return payload
		
		default :
			return state
		
	}
}