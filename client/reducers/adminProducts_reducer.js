export default function (state = {product : {}, updating : false, adding:false, product_index : null}, action ){

	switch (action.type){
		case "ENABLE_UPDATE" : 
			var productData = {
				product : action.product,
				updating : action.payload,
				adding : action.adding,
				product_index : action.index
			}
		
		return  Object.assign({},productData)


		case "UPDATE_PRODUCT" : 
			var productData = {
				product : action.payload,
				updating : action.updating,
				adding : action.adding,
				product_index : action.product_index
			}
			return Object.assign({},productData)

		case "ADD_PRODUCT" : 
			var productData = {
				product : action.payload,
				updating : action.updating,
				adding : action.adding,
				product_index : 0,
			}
	
			return Object.assign({},productData)
		
		case "ENABLE_ADD_PRODUCT" : 

			var productData = {
				product : action.product,
				updating : action.updating,
				adding : action.adding
			}
			return Object.assign({},productData)
	
		case "DELETE_PRODUCT" : 
			var productData = {
				product : action.payload,
				updating : action.updating,
				adding : action.adding,
				product_index : action.index

			}
			var copy = Object.assign({},productData)
			

			return copy
		default :
			return state
		
	}
}