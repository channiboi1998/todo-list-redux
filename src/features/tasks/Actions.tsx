import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useDispatch } from "react-redux";
import { updateSelectedForm } from "./TaskSlice";

const Actions = () => {

    const dispatch = useDispatch();

    return (
        <>
            <Grid className="grid-center" item lg={2} md={6} xs={6}>
                <Tooltip title="Add Task">
                    <IconButton onClick={() => dispatch(updateSelectedForm("add_task"))}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Search Task">
                    <IconButton onClick={() => dispatch(updateSelectedForm("search_task"))}>
                        <SearchIcon />
                    </IconButton>
                </Tooltip>
            </Grid>
        </>
    )
}

export default Actions