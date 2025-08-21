import { User } from "@/services/api";

// Action types
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const REMOVE_USER = "REMOVE_USER";


// Action creators
export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users: User[]) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});
export const fetchUsersFailure = (error: string) => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
});

export const addUser = (user: User) => ({ type: ADD_USER, payload: user });
export const updateUser = (user: User) => ({ type: UPDATE_USER, payload: user });
export const removeUser = (id: number) => ({ type: REMOVE_USER, payload: id });
