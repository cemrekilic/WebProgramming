// react stuff
import { connect } from 'react-redux'
import React, {Component} from 'react'
//redux stuff
import {bindActionCreators} from 'redux'

// my stuff
import {} from '../../actions/index.js'


//lets go
class CartCont extends Component{
	
	constructor(props) {
		super(props)
	}
	
	render(){
		console.log(this.props.cartData)
		return(

			<div class="cart_component">
				<div class="cart_content">
					<img whidth="50px" height="50px" src="http://www.freepngimg.com/thumb/cart/2-2-cart-png-file-thumb.png" alt="image of cart"/>
					<h3>my cart</h3>
					<p>number of article : {this.props.cartData.products.length}</p>
					<button type="button" class="btn btn-default">see me</button>
				</div>
			</div>
		)
		
	}
}


function mapStateToProps(state){
	return{
		cartData : state.cartData
	}
}

function mapDistpatchToProps(dispatch){
	return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDistpatchToProps)(CartCont)