import "./App.css";
import Grid from "@mui/material/Grid";
import TasksList from "./features/tasks/TasksList";
import TasksListFilters from "./features/tasks/TasksListFilters";
import Actions from "./features/tasks/Actions";
import AddTaskForm from "./features/tasks/AddTaskForm";

import { useSelector } from "react-redux";

import { fetchSelectedForm } from "./features/tasks/TaskSlice";
import SearchForm from "./features/tasks/SearchForm";

function App() {

    const selectedForm = useSelector(fetchSelectedForm);

    return (
        <div className="app-container">
            <h1>Things to do</h1>
            {selectedForm === "add_task" ? <AddTaskForm /> : <SearchForm />}
            <TasksList />
            <Grid container>
                <Actions />
                <Grid className="grid-center" item lg={6} md={6} xs={6}>
                    {/* {listDetails.completed} items done, {listDetails.active} items left */}
                </Grid>
                <TasksListFilters />
            </Grid>
        </div>
    );
}

export default App;
