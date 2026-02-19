import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: {
        newsStatus: false,
        latestNews: []
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        }
    }
});

export const { actions, reducer } = userSlice;