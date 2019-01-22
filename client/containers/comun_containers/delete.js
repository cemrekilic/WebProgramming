// react stuff
import { connect } from 'react-redux'
import React, {Component} from 'react'
//redux stuff
import {bindActionCreators} from 'redux'

// my stuff


//lets go
class DeleteCont extends Component{
	
	constructor(props) {
		super(props)
		// props deleteData{msg: , choices [{name : , func: }]}
		this.state = {
			enable : false
		}
	}
	enableMsg(){
		if(this.state.enable === false){

			this.setState({enable:true})
		}
	}
	showMsg(){
		if(this.state.enable === true){
			return(
				<div class="delete_msg_modal">
						<p>{this.props.deleteData.msg}</p>
						{this.showChoice()}
				</div>
			)
		}
	}
	execChoiceFunc(_callback){
		this.setState({enable:false})
		_callback()
	}
	showChoice(){
		return this.props.deleteData.choices.map((choice)=>{
			return(

				<button class="btn btn-default" onClick={()=>{this.execChoiceFunc(choice.func)}}>{choice.name}</button>
			)
		})
	}
	render(){
		return(
			<div class="delete_container">
				<button class="btn btn-default" onClick={()=>{this.enableMsg()}}>X</button>
				{this.showMsg()}
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

export default connect(mapStateToProps, mapDistpatchToProps)(DeleteCont)