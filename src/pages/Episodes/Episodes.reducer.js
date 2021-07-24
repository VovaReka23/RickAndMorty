const initialState = {
    loadingEpisode: false,
    loadedEpisode: false,
    episode: [],
    info: [],
    error: null,
}

export default function episodeReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_EPISODE_REQUEST':
            return { ...initialState, loadingEpisode: true }

        case 'GET_EPISODE_SUCCESS':
            return { ...state, loadingEpisode: false, loadedEpisode: true, episode: action.payload.results, info: action.payload.info }

        case 'GET_EPISODE_ERROR':
            return { ...state, loadingEpisode: false, error: action.payload }

        default:
            return state
    }
}