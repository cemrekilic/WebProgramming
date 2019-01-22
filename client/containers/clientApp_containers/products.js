// react stuff
import { connect } from 'react-redux'
import React, {Component} from 'react'
//redux stuff
import {bindActionCreators} from 'redux'

// my stuff
import {addCartProduct} from '../../actions/index.js'

//lets go
class ProductsCont extends Component{
	
	constructor(props) {
		super(props)
		this.product_name = props.product_name || "no name"
		this.product_price = props.product_price || "no price"
		this.product_description = props.product_description || "no description"
		this.product_tags = props.product_tags || []
		this.product_image = props.product_image || "no_image"
		this.index = props.index || 0
	}
	addToCart(){

		
		this.props.addCartProduct(this.props.cartData, this.props.productData[this.index])
	}
	
	initProduct(){
		return(
			<div >
				<div class="col-sm-6 col-md-4">
					<div class="thumbnail">
						<img class="product_image" src={this.product_image} alt={"image of "+this.product_name}/>
						<div class="caption">
							<h3>{this.product_name} <span class="badge">{this.product_price +'€'}</span></h3>
							<p>{this.product_description}</p>
							<ul className="product_tag_list">
								{this.initProductTag()}
							</ul>
							<p>
								<a href="#" class="btn btn-primary" role="button" onClick={()=>{this.addToCart()}}>Add to cart</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
	initProductTag(){
		return this.product_tags.map((tag)=>{
			return(
				<li>{tag}</li>
			)
		})
	}
	render(){

		return(
			<section className="product_card">
				{this.initProduct()}
			</section>
		)
		
	}
}

function mapStateToProps(state){
	return{
		productData : state.productData,
		cartData : state.cartData
	}
}

function mapDistpatchToProps(dispatch){
	return bindActionCreators({addCartProduct : addCartProduct}, dispatch)
}

export default connect(mapStateToProps, mapDistpatchToProps)(ProductsCont)