export const setPageNo = (pageno) => async (dispatch) => {
    dispatch({ type: 'CHANGE_PAGENO', payload: pageno });
};

export const setTags = (tags) => async (dispatch) => {
    dispatch({ type: 'CHANGE_TAGS', payload: tags });
};

export const setQuery = (query) => async (dispatch) => {
    dispatch({ type: 'CHANGE_QUERY', payload: query });
};

export const setSortBy = (sortby) => async (dispatch) => {
    dispatch({ type: 'CHANGE_SORTBY', payload: sortby });
};

export const setTime = (time) => async (dispatch) => {
    dispatch({ type: 'CHANGE_TIME', payload: time });
};
