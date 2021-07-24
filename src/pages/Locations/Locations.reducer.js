const initialState = {
    loadingLocations: false,
    loadedLocations: false,
    locations: [],
    info: [],
    error: null,
}

export default function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_LOCATIONS_REQUEST':
            return { ...initialState, loadingLocations: true }

        case 'GET_LOCATIONS_SUCCESS':
            return { ...state, loadingLocations: false, loadedLocations: true, locations: action.payload.results, info: action.payload.info }

        case 'GET_LOCATIONS_ERROR':
            return { ...state, loadingLocations: false, error: action.payload }

        default:
            return state
    }
}