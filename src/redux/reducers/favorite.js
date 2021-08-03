const initialState = {
    data: [],
    id: ''
}
const favorite = (state = initialState, action) => {
    const { type, data, id } = action
    switch (type) {
        case 'LOAD_FAVORITE_SUCCESS':
            return {
                ...state,
                data: action.data.data.filter((item) => {
                    return item.favorite !== 'null'
                })
            }

        case 'LOAD_FAVORITE_FAILURE':
            return state;

        case 'ADD_FAVORITE_SUCCESS':
            return {
                ...state,
                id
            }

        case 'ADD_FAVORITE_FAILURE':
            return state;

        case 'DELETE_FAVORITE_SUCCESS':
            return {
                data: []
            }
        case 'DELETE_FAVORITE_FAILURE':
            return state;

        default:
            return state;
    }
}

export default favorite