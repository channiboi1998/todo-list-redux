import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "../features/tasks/TaskSlice";

const store = configureStore({
    reducer: {
        task: TaskReducer,
    }
});

export default store;