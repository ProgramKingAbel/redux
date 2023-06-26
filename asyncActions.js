const redux = require('redux');

const initialState = {
    loading: false,
    users: [],
    error: '',
}

//Declare actions
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

//create action creator functions 
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersFailed = error => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

