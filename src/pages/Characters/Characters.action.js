
import { config } from '../../api/base'
import axios from 'axios'

/**
 * Get character
 */
const getCaracter = (page,
    species,
    status,
    gender) => async dispatch => {
        dispatch({ type: 'GET_CHARACTER_REQUEST' })
        try {
            const response = await axios.get(`${config.url}/character/?page=${page}&species=${species}&status=${status}&gender=${gender}`)
            dispatch({ type: 'GET_CHARACTER_SUCCESS', payload: response.data })
        }
        catch (err) {
            dispatch({ type: 'GET_CHARACTER_ERROR', payload: err.message })
        }
    }



export {
    getCaracter,
}

