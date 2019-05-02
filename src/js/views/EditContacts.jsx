import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from 'prop-types';

export default class EditContacts extends React.Component {
		constructor(){
		super();
		this.state = {
			
		};
	}

	render() {
		return (
			
			<Context.Consumer>
				{({ store, actions }) => {
				let id = this.props.match.params.theid;
				let dataId = store.contacts[id].id;
				console.log(id);
		
				return (
				
					<div className="container">
						<div>
							<h1 className="text-center mt-5" >Edit contact</h1>
							<form>
								<div className="form-group">
									<label>Full Name</label>
									<input type="text" id="fullNameInput" className="form-control" placeholder="Full Name" defaultValue={store.contacts[id].full_name} />
								</div>
								<div className="form-group">
									<label>Email</label>
									<input type="email" id="emailAdress" className="form-control" placeholder="Enter email" defaultValue={store.contacts[id].email}/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input type="phone" id="phoneNumber" className="form-control" placeholder="Enter phone" defaultValue={store.contacts[id].phone} />
								</div>
								<div className="form-group">
									<label>Address</label>
									<input type="text" id="addressLocation" className="form-control" placeholder="Enter address" defaultValue={store.contacts[id].address} />
								</div>
								<button type="button" className="btn btn-primary form-control" onClick={()=>actions.editContact(document.querySelector("#fullNameInput").value, document.querySelector("#emailAdress").value, document.querySelector("#phoneNumber").value, document.querySelector("#addressLocation").value, dataId, this.props.history.push("/"))}
								>save</button>
								<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
							</form>
						</div>
					</div>
			
			
					);
			
			
			}}
			</Context.Consumer>
		);
	}
}


EditContacts.propTypes = {
 match: PropTypes.object,
 history:PropTypes.object


 

 
 
 
	
};