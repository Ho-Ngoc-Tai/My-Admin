import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
    selectedCard: string | null;
}

const initialState: DashboardState = {
    selectedCard: null,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        selectCard: (state, action: PayloadAction<string>) => {
            state.selectedCard = action.payload;
        },
    },
});

export const { selectCard } = dashboardSlice.actions;
export default dashboardSlice.reducer;


