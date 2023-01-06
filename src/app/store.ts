import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { movieApi } from "../features/api/apiSlice";
import counterReducer from "../features/counter/counterSlice";
import searchReducer from "../features/searchText/searchSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
