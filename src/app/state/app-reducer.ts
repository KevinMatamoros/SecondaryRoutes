import { ActionReducerMap } from '@ngrx/store';
import * as Employee from './store/employee/reducer';


export interface AppState{
    ['Employee'] : Employee.State;
}

export const reducer: ActionReducerMap<AppState> = {
    ['Employee']:  Employee.reducer

};