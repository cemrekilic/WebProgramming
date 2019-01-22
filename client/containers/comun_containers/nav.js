// react stuff
import { connect } from 'react-redux'
import React, {Component} from 'react'
//redux stuff
import {bindActionCreators} from 'redux'

// my stuff


//lets go
class NavCont extends Component{
	
	constructor(props) {
		super(props)
		this.menu = props.menu || []
	}
	initMenu(){
		return this.menu.map((item)=>{
			return(
				<li>
					<a href="#">{item}</a>
				</li>
			)
		})
	}
	render(){
		return(

		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">E-commerceApp</a>
				</div>
				<ul class="nav navbar-nav">
					{this.initMenu()}
				</ul>
			</div>
		</nav>
		)
		
	}
}

function mapStateToProps(state){
	return{
		productData : state.productData
	}
}

function mapDistpatchToProps(dispatch){
	return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDistpatchToProps)(NavCont)