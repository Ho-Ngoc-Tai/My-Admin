// import { RootState } from "@/store";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     phone: string;
//     website: string;
// }

// interface UsersState {
//     list: User[];
// }

// const initialState: UsersState = {
//     list: [
//         { id: 1, name: "Alice", email: "alice@example.com", phone: "", website: "" },
//         { id: 2, name: "Bob", email: "bob@example.com", phone: "", website: "" },
//     ],
//     addUser: {
//         isCalling: false,
//         isSuccess: false,
//         isFailure: false,
//         params: null,
//         data: null,
//         error: null,
//     }
// };

// const usersSlice = createSlice({
//     name: "users",
//     initialState,
//     reducers: {
//         addUser: (state, action: PayloadAction<User>) => {
//             // state.list.push(action.payload);
//             // Call api, thực action, lấy trạng thái call api
//             state.addUser.isCalling = true;
//             state.addUser.params = action.payload;
//         },
//         addUserSuccess(state, action: PayloadAction<User>) {
//             // thành công
//             //  gán dữ liệu
//             // set trang thái gọi api thành cong
//             state.addUser.isCalling = false;
//             state.addUser.isSuccess = true;
//             state.addUser.data = action.payload;
//             state.list.push(action.payload);
//         },
//         addUserFailure(state, action: PayloadAction<string>) {
//             // thất bại
//             // set trạng thái gọi api thất bại
//             // trả về lỗi gì
//             state.addUser.isCalling = false;
//             state.addUser.isFailure = true;
//             state.addUser.error = action.payload;
//         },
//         removeUser: (state, action: PayloadAction<number>) => {
//             state.list = state.list.filter(u => u.id !== action.payload);
//         },
//         updateUser: (state, action: PayloadAction<User>) => {
//             const index = state.list.findIndex(u => u.id === action.payload.id);
//             if (index !== -1) state.list[index] = action.payload;
//         },
//         setUsers: (state, action: PayloadAction<User[]>) => {
//             state.list = action.payload;
//         },
//         getUsers: (state, action) => {

//         }
//     },
// });

// export const { addUser, removeUser, updateUser, setUsers } = usersSlice.actions;
// export default usersSlice.reducer;

// // const selectState = (state) => state.users;
// // export const makeUsers = createSelector(selectState, state => state.list)