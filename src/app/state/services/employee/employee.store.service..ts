import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/employee/reducer';
import * as Actions from '../../store/employee/actions'
import * as Selectors from '../../store/employee/selector'



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private store: Store<State>
  ) { }


  getEmployee(){
    this.store.dispatch(Actions.getEmployee({}));
  }

  setEmployee(data){
    this.store.dispatch(Actions.setEmployee(data));
  }

  selector_getEmployee(){
    return this.store.select(Selectors.getEmployee);
  }

  selector_getName(){
    return this.store.select(Selectors.getFlagName);
  }

  selector_getSalary(){
    return this.store.select(Selectors.getFlagSalary);
  }

}
