import * as actionTypes from './../actions/actionTypes';

const initialState = {
    tasks: null
};

const fetchTasks = (state, action) => {
    return {
        ...state,
        tasks: action.tasks
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TASKS:
            return fetchTasks(state, action);
        default:
            return state;
    }
};

export default reducer;
