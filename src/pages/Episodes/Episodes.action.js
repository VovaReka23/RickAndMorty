import { config } from '../../api/base'
import axios from 'axios'

/**
 * Get episode
 */
const getEpisode = (page, name) => async dispatch => {
    dispatch({ type: 'GET_EPISODE_REQUEST' })

    try {
        const response = await axios.get(`${config.url}/episode?page=${page}&name=${name}`)
        dispatch({ type: 'GET_EPISODE_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_EPISODE_ERROR', payload: err.message })
    }
}



export {
    getEpisode,
}

