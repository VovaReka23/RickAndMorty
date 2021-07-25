
// import envConfig from '../../api/base'
import axios from 'axios'

/**
 * Get character
 */
const getCaracter = (filter) => async dispatch => {
    dispatch({ type: 'GET_CHARACTER_REQUEST' })
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${filter.page}&species=${filter.species}&status=${filter.status}&gender=${filter.gender}`)
        dispatch({ type: 'GET_CHARACTER_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_CHARACTER_ERROR', payload: err.message })
    }
}



export {
    getCaracter,
}

