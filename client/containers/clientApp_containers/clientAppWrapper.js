// react stuff
import { connect } from 'react-redux'
import React, {Component} from 'react'
//redux stuff
import {bindActionCreators} from 'redux'

// my stuff
import {getProductData} from '../../actions/index.js'
import NavCont from '../comun_containers/nav.js'
import ProductsCont from './products.js'
import CartCont from './cart.js'

//lets go
class ClientAppWrapperCont extends Component{
	
	constructor(props) {
		super(props)
		this.props.getProductData()
	
	}
	initProducts(){
		
		if(this.props.productData[0].product_name !== null){
			return this.props.productData.map((product, i )=>{
				
				return(
					<ProductsCont product_name={product.product_name}  product_price ={product.product_price} product_description = {product.product_description} product_image = {product.product_image} index = {i}/>
				)
			})
		}
		
	}
	render(){

		return(
			<div>
				<header>
					<NavCont menu={['Home', 'Link']} />
				</header>
				<main>
					<div class="wrapper">
						<div class="panel panel-primary ">
							<div class="panel-heading"><p>Ecomerce app Choose your products</p> <CartCont/> </div>
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
		
	}
}

function mapDistpatchToProps(dispatch){
	return bindActionCreators({getProductData : getProductData}, dispatch)
}

export default connect(mapStateToProps, mapDistpatchToProps)(ClientAppWrapperCont)