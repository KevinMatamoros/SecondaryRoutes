import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  @Input() flagName;
  @Input() flagSalary;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  closePopup(){
    this.router.navigate([{ outlets: { popup: null }}]);
  };

}
