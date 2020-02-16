import { Injectable } from '@angular/core';
import { Effect, createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee/employee.service';
import * as ActionsEmployee from './actions';


@Injectable()
export class EffectsEmployee {

  constructor(
    private action: Actions,
    private employeeService: EmployeeService
  ) { }


  getEmployee$ = createEffect(
    () => this.action.pipe(
      ofType(ActionsEmployee.getEmployee),
      switchMap(() => {
        return this.employeeService.getEmployee().pipe(
          map((data: any) => {
            return ActionsEmployee.setEmployee(data)
          })
        )
      })
    )
  );


}
