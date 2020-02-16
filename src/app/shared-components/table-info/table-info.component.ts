import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss']
})
export class TableInfoComponent implements OnInit {
  @Input() employee;

  constructor() { }

  ngOnInit() {
  }

}
