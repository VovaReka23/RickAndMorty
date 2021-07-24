// import axios from 'axios'

/**
 * Get episode
 */
const getWatchList = () => dispatch => {
    const episode = localStorage.getItem('episode')
    dispatch({ type: 'GET_EPISODE', payload: episode })
}
const getCheckedEpisode = () => dispatch => {
    const episode = localStorage.getItem('checked')
    dispatch({ type: 'GET_CHECKED_EPISODE', payload: episode })
}
const addEpisode = (episode) => ({
    type: 'ADD_EPISODE',
    payload: episode,
});
const checkedEpisode = (episode) => ({
    type: 'CHECKED_EPISODE',
    payload: episode,
});



export {
    getWatchList,
    getCheckedEpisode,
    checkedEpisode,
    addEpisode
}

