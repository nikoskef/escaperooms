import React from 'react';
import './Rooms.css'
import { Esrooms } from './Esrooms'


const Room = ({ id, company, name, img }) => {
	return (
		<div className='tc dib br3 pa3 ma2 grow antonia bw2 shadow5'>
			<img className=' br2 h4 w5 dib' alt = {name} src = {require(`../rimages/${img}`)}/>
			<div className= 'white'>
				<p>{company}</p>
				<p>{name}</p>
			</div>
		</div>
		)
} 

export default Room