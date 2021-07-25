import { config } from '../../api/base'
import axios from 'axios'

/**
 * Get Locations
 */
const getLocations = (filter) => async dispatch => {
    dispatch({ type: 'GET_LOCATIONS_REQUEST' })

    try {
        const response = await axios.get(`${config.url}/location?page=${filter.page}&name=${filter.name}&type=${filter.type}&dimension=${filter.dimension}`)
        dispatch({ type: 'GET_LOCATIONS_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_LOCATIONS_ERROR', payload: err.message })
    }
}



export {
    getLocations,
}

