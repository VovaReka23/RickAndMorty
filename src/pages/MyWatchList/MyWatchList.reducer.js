const initialState = {
    list: [
        { id: 1, episode: 'Snow', cheked: true },
        { id: 2, episode: 'Lannister', cheked: false }
    ],
    columns: [
        { field: 'id', headerName: 'ID', filterable: false, sortable: false, minWidth: 250 },
        { field: 'episode', filterable: false, headerName: 'Episode', flex: 1 }
    ],
    checked: []
}

export default function watchListReducer(state = initialState, action) {
    switch (action.type) {

        case 'GET_EPISODE':
            return { ...state, list: JSON.parse(action.payload) }

        case 'GET_CHECKED_EPISODE':
            return { ...state, checked: action.payload }

        case 'CHECKED_EPISODE':
            const checked = action.payload;
            localStorage.setItem('checked', checked);
            return { ...state, checked: checked }

        case 'ADD_EPISODE':
            let newEpisode = {
                id: Date.now(),
                episode: action.payload,
                cheked: false
            };
            const episodes = [...state.list, newEpisode];
            localStorage.setItem('episode', JSON.stringify(episodes));
            return {
                ...state,
                list: episodes,
            };
        default:
            return state
    }
}