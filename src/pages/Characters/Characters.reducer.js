const initialState = {
    loadingCharacter: false,
    loadedCharacter: false,
    character: [],
    info: [],
    status: ['alive', 'dead', 'unknown'],
    gender: ['female', 'male', 'genderless', 'unknown'],
    error: null,
}

export default function characterReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_CHARACTER_REQUEST':
            return { ...initialState, loadingCharacter: true }

        case 'GET_CHARACTER_SUCCESS':
            return { ...state, loadingCharacter: false, loadedCharacter: true, character: action.payload.results, info: action.payload.info }

        case 'GET_CHARACTER_ERROR':
            return { ...state, loadingCharacter: false, error: action.payload }

        default:
            return state
    }
}