import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name:"auth",
    initialState:{
        admin: false,
        loggedIn: false
    },
    reducers: { // functions that are used to manipulate the state
        signIn:(state, action) => {
            const {name, password} = action.payload;
            state.loggedIn = true;
            state.admin = true;
            // console.log(action); // Testing out by printing the state
        },
        signOut:(state) => {
            state.loggedIn = false;
            state.admin = false;
        }, 
        createUser:(state, action) => {

        }
    }
});

export default slice.reducer;
export const {signIn, signOut, createUser} = slice.actions;