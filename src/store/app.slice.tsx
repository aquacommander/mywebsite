import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menu: false
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            state.menu = action.payload;
        }
    }
});

export const { actions, reducer } = appSlice;

