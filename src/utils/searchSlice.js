import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            // state = { ...action.payload, ...state }

            // merge two objects
            state = Object.assign(state, action.payload);
        }
    }
})

export default SearchSlice.reducer;
export const { cacheResults } = SearchSlice.actions;