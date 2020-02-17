import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../state/services/employee/employee.store.service.';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  flagName$: Observable<boolean>;
  flagSalary$: Observable<boolean>;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.flagSalary$ = this.employeeService.selector_getSalary();
    this.flagName$ = this.employeeService.selector_getName();
  }

  changeFlag(key){
    switch (key) {
      case 'name':
        this.employeeService.setName();
        break;
      case 'salary':
        this.employeeService.setSalary();
        break;
    }
  }

  closePopup(){
    this.router.navigate([{ outlets: { popup: null }}]);
  };

}
