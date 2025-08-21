import { call, put, takeLatest } from "redux-saga/effects";
import { getUsers, User } from "@/services/api";
import {
    FETCH_USERS_REQUEST,
    fetchUsersSuccess,
    fetchUsersFailure,
} from "../actions/userActions";

// Saga: fetch user
function* fetchUsersSaga(): Generator<any, any, any> {
    try {
        const res: { data: User[] } = yield call(getUsers);
        yield put(fetchUsersSuccess(res.data));
    } catch (error: any) {
        yield put(fetchUsersFailure(error.message || "Failed to fetch users"));
    }
}

export default function* userSaga() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
