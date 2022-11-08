import FormGroup from '@mui/material/FormGroup';
import Task from './Task';

import { useSelector } from 'react-redux';
import { fetchTasksByFilter } from './TaskSlice';

const TasksList = () => {

    const tasks = useSelector(fetchTasksByFilter);

    return (
        <>
            <FormGroup className="division">
                {tasks.map((task: any) => {
                    return (
                        <Task key={task.id} task={task} />
                    )
                })}
            </FormGroup>
        </>
    )
}

export default TasksList