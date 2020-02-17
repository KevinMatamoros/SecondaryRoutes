import { Action, createAction, props } from '@ngrx/store';

export const get_employee = '[GET] Employees';
export const set_employee = '[SET] Employees';
export const set_flagName = '[SET] FLAG NAME';
export const set_flagSalary = '[SET] FLAG SALARY';


export const setEmployee = createAction(set_employee, props<{ data: any }>());
export const setName = createAction(set_flagName);
export const setSalary = createAction(set_flagSalary);



export const remove_employee = '[Remove] Employee';
export const add_employee = '[Add] Employee';

export const getEmployee = createAction(get_employee, props<{}>());
export const removeEmployee = createAction(remove_employee, props<{ id: string }>());
export const addEmployee = createAction(add_employee, props<{ employee: any }>());


