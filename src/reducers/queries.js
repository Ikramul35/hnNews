const initialState = {
    pageno: 1,
    tags: 'story',
    query: '',
    sortBy: '',
    time: 0,
};

const queryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_PAGENO':
            return { ...state, pageno: action.payload };
        case 'CHANGE_TAGS':
            return { ...state, tags: action.payload };
        case 'CHANGE_QUERY':
            let newState = { ...state, query: action.payload };
            // saveQueryToDB(newState.query);
            return newState;
        case 'CHANGE_SORTBY':
            return { ...state, sortBy: action.payload };
        case 'CHANGE_TIME':
            return { ...state, time: action.payload };
        default:
            return state;
    }
};

export default queryReducer;
