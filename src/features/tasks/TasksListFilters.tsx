import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasksFilters } from './TaskSlice';
import { updateActiveFilter } from './TaskSlice';

const ListFilters = () => {

    const dispatch = useDispatch();
    const tasksFilters = useSelector(fetchTasksFilters);

    return (
        <>
            <Grid className="box-filter grid-center" item lg={4} md={12} xs={12}>
                {tasksFilters.map((filter: any) => {
                    return (
                        <Button key={filter.id} 
                                variant={filter.selected === true ? "outlined" : "text"}
                                onClick={() => dispatch(updateActiveFilter(filter.id))}>
                                    {filter.label}
                        </Button>
                    )
                })}
            </Grid>
        </>
    )
}

export default ListFilters