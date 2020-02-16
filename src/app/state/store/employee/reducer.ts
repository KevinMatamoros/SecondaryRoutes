import { createReducer, on, Action } from '@ngrx/store';
import { getEmployee, removeEmployee, addEmployee, setEmployee } from './actions';
import { config } from '../../../../../node_modules/rxjs';

export interface State {
    employees: any,
    config: {
        name: boolean,
        salary: boolean
    }
};

export const initialState: State = {
    employees: [],
    config: {
        name: true,
        salary: true
    }
};

export const EmployeeReducer = createReducer(initialState,
    on(setEmployee, (state: State, action) => {
        let newState = { ...state }
        newState.employees = action.data;
        return newState;
    })
);

export function reducer(state: State | undefined, action: Action) {
    return EmployeeReducer(state, action);
}