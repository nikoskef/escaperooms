import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomsList from './Rooms/RoomsList';
import SearchBox from './SearchBox';
import ErrorBoundry from './Components/ErrorBoundry'

import { setSearchField, requestRooms } from './actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRooms.searchField,
		rooms: state.requestRooms.rooms,
		isPending: state.requestRooms.isPending,
		error: state.requestRooms.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRooms: () => requestRooms(dispatch)
	}	
}

class App extends Component {
	
	componentDidMount() {
	 	this.props.onRequestRooms()	
	 }

	render() {
		const { searchField, onSearchChange, rooms, isPending } = this.props;
		const filteredRooms = rooms.filter(room => {
			return room.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? // !isPending 
			<h1>Loading page</h1> :	
		     ( <div className="App, tc">
		      	<h1 >Escape Team!</h1>
		      	<SearchBox searchChange = {onSearchChange}/>
		      	<ErrorBoundry>
		        	<RoomsList Esrooms = { filteredRooms }/>
		        </ErrorBoundry>	        
		      </div>
	    );
	  }  
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
