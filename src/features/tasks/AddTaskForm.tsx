import { useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import { useDispatch } from "react-redux";
import { addNewTask } from "./TaskSlice";


const AddTaskForm = () => {

    const dispatch = useDispatch();
    const [newTaskLabel, setNewTaskLabel] = useState("");

    const handleAddTaskFormSubmit = (e: any) => {
        e.preventDefault();
        if (newTaskLabel) {
            dispatch(addNewTask(newTaskLabel));
            setNewTaskLabel("");
        } else {
            alert("Add new task filed is required!");
        }
        
    }

    return (
        <>
            <form onSubmit={(e) => handleAddTaskFormSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item lg={9} md={12} xs={12}>
                        <TextField  label="Add a new task" 
                                    variant="standard" 
                                    fullWidth 
                                    onChange={(e) => setNewTaskLabel(e.target.value)} 
                                    value={newTaskLabel}
                        />
                    </Grid>
                    <Grid item lg={3} md={12} xs={12}>
                        <Button variant="contained" type="submit" fullWidth className="fullHeight" endIcon={<AddIcon />}>Add Task</Button>
                    </Grid>
                </Grid>
            </form>

        </>
    )
}

export default AddTaskForm