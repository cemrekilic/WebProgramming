export default function (state = [{product_name : null, product_price : null, product_description :null, product_image:null, product_tag:[]}], action ){

	switch (action.type){
		case "GET_PRODUCT_DATA" : 
			var productData = action.payload.slice()

			return productData 
		case 'GET_UPDATED_PRODUCT':
			var productData =action.products.slice()
			productData[action.product_index] = action.payload
			
			var copy = productData.slice()
	
			return copy


		case 'GET_ADDED_PRODUCT':
			var productData =action.products.slice()
			productData.unshift(action.payload)
			
			var copy = productData.slice()
		
			return copy

		case 'GET_DELETED_PRODUCT':

			var productData = action.products.slice()
			
			productData.splice(action.payload.product_index,1 )
		
			return productData
		default :
			return state
		
	}
}