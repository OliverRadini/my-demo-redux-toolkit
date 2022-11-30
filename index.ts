import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const initialNumbersState: number[] = [];

const numbersSlice = createSlice({
    name: "numbers",
    initialState: initialNumbersState,
    reducers: {
        push: (state, action: PayloadAction<number>) => [action.payload, ...state],
        pop: (state) => {
            const [
                first,
                ...rest
            ] = state;
            return rest;
        }
    }
});

const store = configureStore({
    reducer: {
        numbers: numbersSlice.reducer
    }
});
