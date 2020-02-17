import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../state/services/employee/employee.store.service.';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employee$: Observable<any>;
  flagSalary$:Observable<boolean>;
  flagName$: Observable<boolean>;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService.getEmployee();
    this.employee$ = this.employeeService.selector_getEmployee();
    this.flagSalary$ = this.employeeService.selector_getSalary();
    this.flagName$ = this.employeeService.selector_getName();
  }

}
