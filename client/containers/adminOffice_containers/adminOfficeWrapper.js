// react stuff
import { connect } from 'react-redux'
import React, {Component} from 'react'
//redux stuff
import {bindActionCreators} from 'redux'

// my stuff
import {getProductData, enableAddProduct} from '../../actions/index.js'
import NavCont from '../comun_containers/nav.js'
import ProductsOfficeCont from './productsOffice.js'
import ManageProductCont from './manageProducts.js'
//lets go
class AdminOfficeWrapperCont extends Component{
	
	constructor(props) {
		super(props)
		this.props.getProductData()
		
	
	}
	initProducts(){
			
		if(this.props.productData[0].product_name !== null && this.props.productAdminData.adding === false){
			return this.props.productData.map((product, i )=>{
				
				return(
					<ProductsOfficeCont product_id={product.product_id} product_name={product.product_name}  product_price ={product.product_price} product_description = {product.product_description} product_image = {product.product_image} index = {i}/>
				)
			})
		}
		else if(this.props.productAdminData.adding === true){

			return(
					<ManageProductCont mode="addProduct"/>
			)
		}
		
	}
	
	enableAddProduct(){
		if(this.props.productAdminData.adding === false){

			this.props.enableAddProduct(this.props.productAdminData)
		}
	}

	render(){

		return(
			<div>
				<header>
					<NavCont menu={['Go on app',]} />
				</header>
				<main>
					<div class="wrapper">
						<div class="panel panel-primary ">
							<div class="panel-heading"><p>Ecomerce Back office</p> <button onClick={()=>{this.enableAddProduct()}} type="button" class="btn btn-default">Add Product</button> </div>
							<div class="panel-body">{this.initProducts()}</div>
						</div>
					</div>
				</main>
			</div>
		)
		
	}
}


function mapStateToProps(state){
	return{
		
		productData : state.productData,
		productAdminData : state.productAdminData
		
	}
}

function mapDistpatchToProps(dispatch){
	return bindActionCreators({getProductData : getProductData, enableAddProduct : enableAddProduct}, dispatch)
}

export default connect(mapStateToProps, mapDistpatchToProps)(AdminOfficeWrapperCont)