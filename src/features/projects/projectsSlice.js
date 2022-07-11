import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [
    ],
    loading: false,
    hasError: false
}
export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjects: (state) => {
            state.loading = true;
        },
        getProjectsSuccess: (state, { payload }) => {
            state.projects = payload;
            state.loading = false;
            state.hasError = false;
        },
        getProjectsFailure: (state) => {
            state.loading = false;
            state.hasError = true;
        },
        newProject: (state, action) => {

        }
    }
})

export const { getProjects, getProjectsFailure, getProjectsSuccess, newProject } = projectSlice.actions
export default projectSlice.reducer
export const projectSelector = state => state.projects;

export function fetchProjects() {
    return async (dispatch) => {
        dispatch(getProjects())
        try {
            const response = await fetch('http://localhost:3000/project/all');
            const data = await response.json();
            if (!data.error) {
                dispatch(getProjectsSuccess(data['projects']))
            } else {
                dispatch(getProjectsFailure());
            }
        } catch (error) {
            dispatch(getProjectsFailure())
        }
    }
}