const store = require('./App/store');
const cakeActions = require('./App/features/cake/cakeSlice').cakeActions;

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('UpdatedState', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

unsubscribe()