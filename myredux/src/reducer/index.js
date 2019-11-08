
import { FETCH_LOADING, FETCH_SUCCESS, FETCH_FAILED } from "../actions"


const initialState = {
    isLoading: false,
    error: null,
    data: []
}

function reducer (state = initialState, action) {
    console.log(`reducer`, action)
    switch ( action.type) {

        case FETCH_LOADING:
            return {
                ...state,
                isLoading: true,
                error:null
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading:false,
                error: null,
                data: action.payload,
            }
            case FETCH_FAILED:
                return {
                    ...state,
                    isLading: false,
                    error: action.payload,
                    data: []
                }
                default:
                    return state
    }
}

export default reducer;