// react stuff
import { connect } from 'react-redux'
import React, {Component} from 'react'
//redux stuff
import {bindActionCreators} from 'redux'

// my stuff
import {updateProduct, getUpdatedProduct, addProduct,getAddedProduct} from '../../actions/index.js'

//lets go
class ManageProductCont extends Component{
	
	constructor(props) {
		super(props)
		this.index = props.index || 0
		this.nodes = {
			name :null,
			desc:null,
			img :null,
			price: null
		}
	}


	updateProduct(evt){
			let data = this.props.productData[this.index]
			data.product_name  = this.nodes.name.value
			data.product_image  = this.nodes.img.value
			data.product_description  = this.nodes.desc.value
			data.product_price  = this.nodes.price.value

			let p1 = new Promise((resolve,reject)=>{
				return resolve(this.props.updateProduct(data, this.index))
				
			})

			p1.then(()=>{

				this.props.getUpdatedProduct(this.props.productData, data, this.index)
				
			})


			
	}
	enableUpdateProduct(){
		if(this.props.productAdminData.product_index === this.index ){

			return(
				<div class="admin-office" >
					<div class="product_office">
						<div>
							<label >Image_url :</label>
							
							<input class="form-control" defaultValue ={this.props.product_image} ref={(input)=>{this.nodes.img = input}} />
							<div >
								<label >Name:</label>
								<input class="form-control" defaultValue ={this.props.product_name} ref={(input)=>{this.nodes.name = input}} />
								<label >Price:</label>
								<input class="form-control" defaultValue ={this.props.product_price} ref={(input)=>{this.nodes.price = input}} />
								<label >Description :</label> 
								<p class="description"><textarea class="form-control area" rows="2" ref={(area)=>{this.nodes.desc = area}}>{this.props.product_description}</textarea></p>
								<ul className="product_tag_list">
									
								</ul>
								<button class="btn btn-default" type="button" onClick={(evt)=>{this.updateProduct(evt)}}>Update</button>
							</div>

						</div>
					</div>
				</div>
			)
		}
	}
	enableAddProduct(){

		return(
			<div class="admin-office" >
					<div class="">
						<div>
							<label >Image_url :</label>
							
							<input class="form-control" placeHolder ="Put Image url product here" ref={(input)=>{this.nodes.img = input}} />
							<div >
								<label >Name:</label>
								<input class="form-control" placeHolder ="Put name product here" ref={(input)=>{this.nodes.name = input}} />
								<label >Price:</label>
								<input class="form-control" placeHolder ="Put Price product here (ex :10)" ref={(input)=>{this.nodes.price = input}} />
								<label >Description :</label> 
								<p class="description"><textarea class="form-control area" rows="2" ref={(area)=>{this.nodes.desc = area}} placeHolder="Put description product here"></textarea></p>
								<ul className="product_tag_list">
									
								</ul>
								<button class="btn btn-default" type="button" onClick={(evt)=>{this.addProduct(evt)}}>Add</button>
							</div>

						</div>
					</div>
				</div>
		)
		
	
	}
	addProduct(){

		let data = {}
			data.product_name  = this.nodes.name.value
			data.product_image  = this.nodes.img.value
			data.product_description  = this.nodes.desc.value
			data.product_price  = this.nodes.price.value
			
			let p1 = new Promise((resolve,reject)=> {
				return resolve(this.props.addProduct(data)  )
			})
			p1.then((data)=>{
				this.props.getAddedProduct(this.props.productData, data.payload)
			})

	}
	initManageProduct(){


		if(this.props.mode === "update"){
	
			return(
				<div>
					{this.enableUpdateProduct()}
				</div>
			)
		}
		else if(this.props.mode === "addProduct"){

			return(
				<div>
					{this.enableAddProduct()}
				</div>
			)
		}
		else{
			return(
				<p>watchout dev error you try to call inexitent func in manageProductCont</p>
			)
		}
	}

	render(){
		return(
			<div>
				{this.initManageProduct()}
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
	return bindActionCreators({
		updateProduct:updateProduct, 
		getUpdatedProduct : getUpdatedProduct, 
		addProduct: addProduct,
		getAddedProduct : getAddedProduct
	}, dispatch)
}

export default connect(mapStateToProps, mapDistpatchToProps)(ManageProductCont)