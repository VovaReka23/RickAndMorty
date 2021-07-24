import axios from 'axios'

/**
 * Get Locations
 */
const getLocations = (page) => async dispatch => {
    dispatch({ type: 'GET_LOCATIONS_REQUEST' })

    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
        dispatch({ type: 'GET_LOCATIONS_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_LOCATIONS_ERROR', payload: err.message })
    }
}



export {
    getLocations,
}

