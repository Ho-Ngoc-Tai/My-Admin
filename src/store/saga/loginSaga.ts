import { takeLatest, call, put } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../reducer/loginReducer";

// fake API call
function loginAPI(credentials: { username: string; password: string }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.username === "admin" && credentials.password === "123") {
                resolve({ username: "admin", role: "admin" });
            } else {
                reject("Invalid username or password");
            }
        }, 1000);
    });
}

// worker
function* handleLogin(action: any): Generator<any, void, any> {
    try {
        const user = yield call(loginAPI, action.payload);
        yield put({ type: LOGIN_SUCCESS, payload: user });
    } catch (error: any) {
        yield put({ type: LOGIN_FAILURE, payload: error });
    }
}

// watcher
export default function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, handleLogin);
}
