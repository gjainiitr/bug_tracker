import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name:"user",
    initialState:[],
    reducers: {
        getUser:(state) => {
            state.push({name:"Gopal Jain"});
            state.push({name:"Govind Jain"});
        }
    }
});

export default slice.reducer;
export const {getUser} = slice.actions;