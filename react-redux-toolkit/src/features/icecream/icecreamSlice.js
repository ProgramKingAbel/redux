import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
    numOfIceCreams: 10,
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => { state.numOfIceCreams-- },
        restocked: (state, actions) => {
            state.numOfIceCreams += actions.payload
        },
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCreams -- 
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIceCreams--
        })
    }
})

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions