import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../../state/services/employee/employee.store.service.';
import { Store } from '../../../../../node_modules/@ngrx/store';
import { AppState } from '../../../state/app-reducer';

@Component({
  selector: 'app-config-page',
  templateUrl: './config.page.component.html',
  styleUrls: ['./config.page.component.scss']
})
export class ConfigComponentPage implements OnInit {


  constructor(
  ) { 
    
  }

  ngOnInit() {

  }

  

}
