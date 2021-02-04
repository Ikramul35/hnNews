import { fetchPosts } from '../api/api';

export const getPosts = (pageno, tags, query, sortBy, time) => async (
    dispatch
) => {
    const data = await fetchPosts(pageno, tags, query, sortBy, time);

    dispatch({ type: 'FETCH_ALL', payload: { data, query } });
};

export const setUserName = (user) => async (dispatch) => {
    dispatch({ type: 'USERNAME', payload: user });
};

export const setUserPassword = (password) => async (dispatch) => {
    dispatch({ type: 'PASSWORD', payload: password });
};

export const authenticateUser = () => async (dispatch) => {
    dispatch({ type: 'AUTHENTICATE', payload: '' });
};
