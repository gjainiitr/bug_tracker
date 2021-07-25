import {createSlice} from '@reduxjs/toolkit';
import { retrieveBugs } from '../bugController';

const slice = createSlice({
    name:"bug",
    initialState: [],
    reducers: {
        getBugs: (state) => {
            return retrieveBugs();
        },
        createBugs: (state, actions) => {

        },
        updateBug: (state, actions) => {

        },
        markComplete: (state, actions) => {

        }
    }
})