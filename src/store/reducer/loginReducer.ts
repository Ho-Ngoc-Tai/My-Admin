// Action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export interface LoginState {
    loading: boolean;
    error: string | null;
    currentUser: any | null;
    isAuthenticated: boolean;
}

const initialState: LoginState = {
    loading: false,
    error: null,
    currentUser: null,
    isAuthenticated: false,
};

// Reducer
export default function loginReducer(state = initialState, action: any): LoginState {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                isAuthenticated: true,
            };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case LOGOUT:
            return { ...state, currentUser: null, isAuthenticated: false };
        default:
            return state;
    }
}

// ✅ Action creators
export const loginRequest = (payload: { username: string; password: string }) => ({
    type: LOGIN_REQUEST,
    payload,
});

export const loginSuccess = (user: any) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error: string) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const logout = () => ({
    type: LOGOUT,
});
