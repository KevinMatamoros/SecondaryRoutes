import { ActionReducerMap } from '@ngrx/store';
import * as Employee from './store/employee/reducer';
import { InjectionToken } from '@angular/core';

export const APP_REDUCERS = 'App_Reducers';
export const EMPLOYEE_STORE = 'Employee';

export interface AppState{
    'Employee': Employee.State;
}

export const reducer: ActionReducerMap<AppState> = {
    'Employee': Employee.reducer
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('App Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducer };
