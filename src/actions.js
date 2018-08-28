import {
 CHANGE_SEARCH_FIELD,
 REQUEST_ROOMS_PENDING,
 REQUEST_ROOMS_SUCCESS,
 REQUEST_ROOMS_FAILED 
} from './constants'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRooms = () => (dispatch) => {
	dispatch({ type: REQUEST_ROOMS_PENDING });
		fetch('')
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_ROOMS_SUCCESS, payload: data}))
		.catch(error => dispatch({ type: REQUEST_ROOMS_FAILED, payload: error }))
}