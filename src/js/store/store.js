import PropTypes from "prop-types";
import React from "react";

const getState = ({ getStore, setStore }) => {
	
	return {
		store: {
			contacts:[]
		},
		
		
		
		actions: {
		deleteCon: (id)=>{
			const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id,{
					method: "DELETE"
					

			
				})
					
				.then(getDataUpdated=>  {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
				.then(response => response.json())

				.then(data => {
			
					store.contacts = data;
					setStore({ store:store });
		
				
				});
				});
			
				
		},
		
			
		
		
		addContact: (name,email,number,address,props) => {
			const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/",{
					method: 'POST', 
				headers:{ 'Content-Type': 'application/json' },
				body: JSON.stringify({
					"full_name":name,
					"email":email,
					"phone":number,
					"address":address,
					"agenda_slug":"downtown_viii"
					
				})
				})
				
				
				.then(getDataUpdated=>  {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
				.then(response => response.json())

				.then(data => {
			
					store.contacts = data;
					setStore({ store:store});
		
				
				});
				});
				
				props.history.push("/");

			

				
				},
		
			editContact: (name,email,number,address,id) => {
			const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id  ,{
					method: 'PUT', 
				headers:{ 'Content-Type': 'application/json' },
				body: JSON.stringify({
					"full_name":name,
					"email":email,
					"phone":number,
					"address":address,
					"agenda_slug":"downtown_viii"
					
					
					
				})
				})
				
				.then(getDataUpdated=>  {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
				.then(response => response.json())

				.then(data => {
			
					store.contacts = data;
					setStore({ store:store });
		
				
				});
				});
				
				
			}
				
				}

				
				
			
				
			};
		};
		
getState.propTypes = {
		history: PropTypes.object,
		match:	PropTypes.object
		
};

export default getState;


