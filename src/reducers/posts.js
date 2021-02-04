import { getFromDB, saveToDB } from '../database/posts';

const initialState = {
    posts: [],
    isAuthenticated: localStorage.getItem('hnNews')
        ? JSON.parse(localStorage.getItem('hnNews')).isAuthenticated
        : false,
    userData: {
        username: localStorage.getItem('hnNews')
            ? JSON.parse(localStorage.getItem('hnNews')).userData.username
            : '',
        password: localStorage.getItem('hnNews')
            ? JSON.parse(localStorage.getItem('hnNews')).userData.password
            : '',
        searchHistory: localStorage.getItem('hnNews')
            ? JSON.parse(localStorage.getItem('hnNews')).userData.searchHistory
            : [],
    },
};

const postReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case 'USERNAME':
            newState = {
                ...state,
                userData: { ...state.userData, username: action.payload },
            };
            return newState;
        case 'PASSWORD':
            newState = {
                ...state,
                userData: { ...state.userData, password: action.payload },
            };
            return newState;
        case 'AUTHENTICATE':
            if (
                state.userData.username.length &&
                state.userData.password.length
            ) {
                newState = { ...state, isAuthenticated: true };
            }
            if (newState.isAuthenticated) {
                newState = getFromDB(newState);
            }
            return newState;
        case 'FETCH_ALL':
            newState = { ...state, posts: action.payload.data };
            if (action.payload.query.length > 0) {
                newState.userData.searchHistory.push(action.payload.query);
            }
            saveToDB(newState);
            return newState;
        default:
            return state;
    }
};

export default postReducer;
