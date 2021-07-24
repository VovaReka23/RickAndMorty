
// import envConfig from '../../api/base'
import axios from 'axios'

/**
 * Get character
 */
const getCaracter = (...arg) => async dispatch => {
    dispatch({ type: 'GET_CHARACTER_REQUEST' })
    console.log(...arg)
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=1&name=&status=`)
        dispatch({ type: 'GET_CHARACTER_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_CHARACTER_ERROR', payload: err.message })
    }
}



export {
    getCaracter,
}

