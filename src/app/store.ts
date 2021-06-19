import { configureStore } from '@reduxjs/toolkit';
import  MapSlice from '../redux/MapReducer';

export const store = configureStore({
  reducer: {
    map: MapSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch