import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext.jsx";

class Modal extends React.Component{
	constructor(){
		super();
		this.state = {
			
			
		};
	}
		
	render(){
		
		
		return (
			
			<Context.Consumer>
				{({ store, actions }) => { 
						
			
			
				
				
				
				return (
					<div className="modal" tabIndex="-1"  role="dialog" style={{display: (this.props.show) ? 'inline-block' : 'none'}}>
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Are you sure?</h5>
									{ (this.props.onClose) ?
										<button onClick={() => this.props.onClose()} type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">X</span>
										</button>
									:''
							}
								</div>
								<div className="modal-body">
									<p>Warning: unknown consequences after this point... Kidding!</p>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-primary" onClick={() => this.props.onClose()}>Oh no!</button>
									<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() =>actions.deleteCon(store.id, this.props.onClose())}>Do it!</button>
								</div>
							</div>
						</div>
					</div>
					);
			
			}}
			</Context.Consumer>
			
		);
				
	}
		
}

Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	match:PropTypes.object,
	onDelete: PropTypes.func
	
	
};

/**
 * Define the default values for
 * your component's properties
**/
Modal.defaultProps = {
	show: false,
	onClose: null
};
export default withRouter(Modal);