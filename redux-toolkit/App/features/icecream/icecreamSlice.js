const createSlice = require('@reduxjs/toolkit').createSlice;

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
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;