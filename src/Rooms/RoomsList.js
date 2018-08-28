import React from 'react';
import Rooms from './Rooms';

const RoomsList = ( { Esrooms } ) => {
	
	return (
		<div>
			{
			Esrooms.map( (user, i) => {
				return( 
					<Rooms 
						key={Esrooms[i].id} 
						company ={Esrooms[i].company} 
						name = {Esrooms[i].name}
						img = {Esrooms[i].img} 
					/>
					);	
				})
			}		
		</div>
	)	
}

export default RoomsList