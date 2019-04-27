
import React from "react";

const getState = ({ getStore, setStore }) => {
	
	return {
		store: {
			contacts:[]
		},
		
		
		
		actions: {
		deleteCon: ()=>{
			const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/{contact_id}",{
					method: "DELETE"
			
			
			
				});
			
			
		},
		
		
		addContact: (name,email,number,address) => {
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
				});
				
		
					
				
				
				// .then(getDataUpdated=>  {
				// fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
				// .then(response => response.json())

				// .then(data => {
			
				// 	store.contacts = data;
				// 	setStore({ store:store });
		
				
				// });
				// });
				
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
				});
			}
				
				}

				
				
			
				
			};
		};
	

export default getState;


