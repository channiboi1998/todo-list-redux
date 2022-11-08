import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux"; 
import { updateTaskCompletedStatusById } from "./TaskSlice";

const Task = ({ task }:any) => {

    const dispatch = useDispatch();

    return (
        <FormControlLabel
            control={<Checkbox checked={task.completed} onChange={(e) => dispatch(updateTaskCompletedStatusById(
                {
                    id: task.id, 
                    status: e.target.checked
                }
                )) } />}
            label={task.label} />
    )
}

export default Task