import {ADD_NUMBER} from "../action-type";

const initialState = {array: [], a: 1};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER: {
            return {
                ...state,
                array: [...state.array, action.element]
            }
        }

        default:
            return state;
    }
};

export default mainReducer;

