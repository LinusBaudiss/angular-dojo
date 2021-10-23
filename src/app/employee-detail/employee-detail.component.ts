import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
