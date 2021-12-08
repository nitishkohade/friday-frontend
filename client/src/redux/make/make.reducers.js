import { MAKE_ACTION_TYPES } from "./make.types"

const initialState = {
    makes: null,
    selectedMake: null,
    errorMessage: null
}

const makeReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case MAKE_ACTION_TYPES.SET_MAKES:
            const makes = action.payload
            return {
                ...state,
                makes,
                errorMessage: null
            }
        case MAKE_ACTION_TYPES.SELECT_MAKE:
            const selectedMake = action.payload
            return {
                ...state,
                selectedMake,
                errorMessage: null
            }
        // case MAKE_ACTION_TYPES.SET_ERROR_MESSAGE:
        //     const errorMessage = action.payload
        //     return {
        //         ...state,
        //         errorMessage
        //     }
        default:
            return state
    }
}

export default makeReducer