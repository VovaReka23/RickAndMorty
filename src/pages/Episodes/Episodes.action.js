import axios from 'axios'

/**
 * Get episode
 */
const getEpisode = (filter) => async dispatch => {
    dispatch({ type: 'GET_EPISODE_REQUEST' })

    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${filter.page}&name=${filter.name}`)
        dispatch({ type: 'GET_EPISODE_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_EPISODE_ERROR', payload: err.message })
    }
}



export {
    getEpisode,
}

