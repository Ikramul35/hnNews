export const saveToDB = (state) => {
    let newState = { ...state };
    delete newState.posts;
    localStorage.setItem('hnNews', JSON.stringify(newState));
};

export const saveQueryToDB = (query) => {
    let savedState = JSON.parse(localStorage.getItem('hnNews'));
    let newState = {
        ...savedState,
        userData: {
            ...savedState.userData,
            searchHistory: [...savedState.userData.searchHistory, query],
        },
    };
    console.log(newState);
    localStorage.setItem('hnNews', JSON.stringify(newState));
    console.log(JSON.parse(localStorage.getItem('hnNews')));
};

export const getFromDB = (state) => {
    const savedData = JSON.parse(localStorage.getItem('hnNews'));
    if (
        state.userData.username === savedData.userData.username &&
        state.userData.password === savedData.userData.password
    ) {
        return savedData;
    }
    return state;
};
