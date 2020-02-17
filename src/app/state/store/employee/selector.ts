import { createSelector } from '@ngrx/store';
import { State } from './reducer';

export const employee = (state) => state.Employee;

export const getFlagName = createSelector(employee, (state: State) => { console.log(state);return state.config.name });
export const getFlagSalary = createSelector(employee, (state: State) => { return state.config.salary });
export const getEmployee = createSelector(employee, (state: State) => {
    let response = state.employees;
    return response;
});
