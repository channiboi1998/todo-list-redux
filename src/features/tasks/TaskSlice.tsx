import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [
        {
            id: nanoid(),
            label: "My First Task",
            completed: true,
        },
        {
            id: nanoid(),
            label: "My Second Task",
            completed: false,
        },
        {
            id: nanoid(),
            label: "My Third Task",
            completed: false,
        },
    ],
    tasksFilters: [
        {
            id: nanoid(),
            label: "all",
            selected: true,
        },
        {
            id: nanoid(),
            label: "active",
            selected: false,
        },
        {
            id: nanoid(),
            label: "completed",
            selected: false,
        },
    ],
    selectedForm: "add_task",
    searchValue: "",
};

const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        updateActiveFilter: (state, action) => {
            state.tasksFilters.map((filter: any) => {
                if (filter.id === action.payload) {
                    filter.selected = true;
                } else {
                    filter.selected = false;
                }
                return filter;
            });
        },
        updateTaskCompletedStatusById: (state, action) => {
            state.tasksList.map((task:any) => {
                if (task.id === action.payload.id) {
                    task.completed = action.payload.status;
                }
                return task;
            })
        }, 
        updateSelectedForm: (state, action) => {
            state.selectedForm = action.payload;
            state.searchValue = "";
        }, 
        addNewTask: (state, action) => {
            state.tasksList.push({
                id: nanoid(),
                label: action.payload,
                completed: false
            });
        },
        filterTasksBySearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    },
});

export const fetchTasksFilters = (state: any) => state.task.tasksFilters;

export const fetchSelectedForm = (state: any) => state.task.selectedForm;

export const fetchTasksByFilter = (state: any) => {
    let selectedFilter = state.task.tasksFilters.find((filter: any) => filter.selected === true);
    if (selectedFilter.label === "active") {
        return state.task.tasksList.filter((task: any) => task.completed === false).filter((task: any) => task.label.toLowerCase().includes(state.task.searchValue));
    } else if (selectedFilter.label === "completed") {
        return state.task.tasksList.filter((task: any) => task.completed === true).filter((task: any) => task.label.toLowerCase().includes(state.task.searchValue));
    }
    return state.task.tasksList.filter((task: any) => task.label.toLowerCase().includes(state.task.searchValue));
}

export const {  updateActiveFilter, 
                updateTaskCompletedStatusById, 
                updateSelectedForm,
                addNewTask,
                filterTasksBySearchValue
             } = taskSlice.actions;

export default taskSlice.reducer;