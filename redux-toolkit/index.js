const store = require('./App/store');
const cakeActions = require('./App/features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./App/features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./App/features/user/userSlice').fetchUsers;

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
})

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(2))

// unsubscribe()