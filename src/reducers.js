import { Esrooms } from './Rooms/Esrooms';
import {
 CHANGE_SEARCH_FIELD,
 REQUEST_ROOMS_PENDING,
 REQUEST_ROOMS_SUCCESS,
 REQUEST_ROOMS_FAILED 
} from './constants'

const initialStateSearch = {
	searchField: ''
}

export const searchRooms = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state, {searchField: action.payload});
		default:
			return state;	
	}
}

const initialStateRooms = {
	isPending: false,
	rooms: Esrooms,
	error: ''
}

export const requestRooms = (state=initialStateRooms, action={}) => {
	switch(action.type) {
		case REQUEST_ROOMS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_ROOMS_SUCCESS:
			return Object.assign({}, state, { rooms: action.payload, isPending: false })
		case REQUEST_ROOMS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default:
			return state;	
				
	}
}