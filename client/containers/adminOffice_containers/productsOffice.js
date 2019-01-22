// react stuff
import { connect } from 'react-redux'
import React, {Component} from 'react'
//redux stuff
import {bindActionCreators} from 'redux'

// my stuff
import { enableUpdate, deleteProduct, getDeletedProduct} from '../../actions/index.js'
import ManageProductCont from './manageProducts.js'
import DeleteCont from '../comun_containers/delete.js'
//lets go
class ProductsOfficeCont extends Component{
	
	constructor(props) {
		super(props)
		this.index = props.index || 0
		
	}

	enableEditProduct(){
		

		this.props.enableUpdate(this.props.productData[this.index], this.index)
		
	}

	initProduct(){

		if(this.props.productAdminData.adding === false &&this.props.productAdminData.updating === true && this.props.productAdminData.product_index === this.index ){
			
			return(
				<ManageProductCont mode="update" product_id={this.props.product_id} product_name={this.props.product_name}  product_price ={this.props.product_price} product_description = {this.props.product_description} product_image = {this.props.product_image} index = {this.index}/>
			)
		}
		else if(this.props.productAdminData.adding === false && this.props.productAdminData.updating === false  ){
			let deleteData = {
				msg:'Do you want delete ' +this.props.product_name+' ?',
				choices : [
					{name :'yes' , 
						func:()=>{

								let p1 = new Promise((resolve,reject)=>{
									return resolve(this.props.deleteProduct(this.props.productData[this.index], this.index))
								})
								p1.then(()=>{

									this.props.getDeletedProduct(this.props.productData,this.props.productAdminData)
								})
								
							
						}
					},
					{name :'no' , 
						func: ()=>{console.log('no choice')}
					} 
				]
			}
			return(

				<div class="admin-office" >
					
					<div class="product_office">
						<div>
							<img class="product_image thumbnail " src={this.props.product_image} alt={"image of "+this.props.product_name}/>
							<div class="caption">
								<h3>{this.props.product_name} <span class="badge">{this.props.product_price +'€'}</span> <img class="edit-logo" src="http://fr.seaicons.com/wp-content/uploads/2015/11/pencil-icon.png" alt="edit logo" onClick={(evt)=>{this.enableEditProduct()}}/> <DeleteCont deleteData={deleteData}  /></h3>
								<p class="description">{this.props.product_description}</p>
								<ul className="product_tag_list">
								
								</ul>
								<p>
								</p>
							</div>
						</div>
					</div>
				</div>
			)
		}

		
	}
	initProductTag(){
		return this.props.product_tags.map((tag)=>{
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
		productAdminData : state.productAdminData
		
	}
}

function mapDistpatchToProps(dispatch){
	return bindActionCreators({enableUpdate: enableUpdate, deleteProduct: deleteProduct, getDeletedProduct:getDeletedProduct}, dispatch)
}

export default connect(mapStateToProps, mapDistpatchToProps)(ProductsOfficeCont)