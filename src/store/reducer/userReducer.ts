import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/services/api";

export interface UserState {
    list: User[];
}

const initialState: UserState = {
    list: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            state.list = action.payload;
        },
        addUser(state, action: PayloadAction<User>) {
            state.list.push(action.payload);
        },
        updateUser(state, action: PayloadAction<User>) {
            state.list = state.list.map(u => u.id === action.payload.id ? action.payload : u);
        },
        removeUser(state, action: PayloadAction<number>) {
            state.list = state.list.filter(u => u.id !== action.payload);
        },
    },
});

// Export actions
export const { setUsers, addUser, updateUser, removeUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
