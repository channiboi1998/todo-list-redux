import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterTasksBySearchValue } from "./TaskSlice";

const SearchForm = () => {

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState("");


    const handleSearchInputChange = (e:any) => {
        setSearchValue(e.target.value);
        dispatch(filterTasksBySearchValue(e.target.value));
    }

    const handleSearchFormSubmit = (e:any) => {
        e.preventDefault();
        dispatch(filterTasksBySearchValue(searchValue));
    }

    return (
        <>
            <form onSubmit={(e) => handleSearchFormSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item lg={9} md={12} xs={12}>
                        <TextField value={searchValue} label="Search task name" variant="standard" fullWidth onChange={(e) => handleSearchInputChange(e)} />
                    </Grid>
                    <Grid item lg={3} md={12} xs={12}>
                        <Button variant="contained" type="submit" fullWidth className="fullHeight" endIcon={<SearchIcon />} >Search Task</Button>
                    </Grid>
                </Grid>
            </form>

        </>
    )
}

export default SearchForm