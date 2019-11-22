import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getTasks = () => {
    return async dispatch => {
        try {
            let tasks = await axios.get('/api/todo/all');

            dispatch(fetchTasks(tasks.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchTasks = tasks => {
    return {
        type: actionTypes.FETCH_TASKS,
        tasks: tasks
    };
};

export const postTask = task => {
    return async dispatch => {
        try {
            await axios.post('/api/todo/new', task);
            dispatch(getTasks());
        } catch (e) {
            console.log(e);
        }
    };
};

export const updateTask = task => {
    return async dispatch => {
        try {
            await axios.post('/api/todo/update', task);
            dispatch(getTasks());
        } catch (e) {
            console.log(e);
        }
    };
};
