// react stuff
import { connect } from 'react-redux'
import React, {Component} from 'react'
//redux stuff
import {bindActionCreators} from 'redux'

// my stuff
import {} from '../../actions/index.js'


//lets go
class PortalWrapperCont extends Component{
	
	constructor(props) {
		super(props)
		
	
	}
	
	render(){

		return(
			<div>
				<p>ello im portal</p>
			</div>
		


			
		)
		
	}
}


function mapStateToProps(state){
	return{

	}
}

function mapDistpatchToProps(dispatch){
	return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDistpatchToProps)(PortalWrapperCont)