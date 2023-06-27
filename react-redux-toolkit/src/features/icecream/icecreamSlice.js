import { createSlice } from '@reduxjs/toolkit';

const { cakeActions } = require('../cake/cakeSlice');

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
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIceCreams--
        })
    }
})

export default icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;