const store = require('./App/store');

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('UpdatedState', store.getState())
})