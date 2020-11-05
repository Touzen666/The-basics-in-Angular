import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

public employees =[];

  // public employees = [
  //   {"id":1,"name":"Bartosz",age:24},
  //   {"id":2,"name":"Stefan",age:34},
  //   {"id":3,"name":"Mariusz",age:41},
  //   {"id":4,"name":"Andrzej",age:18},
  // ]

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.employees =this._employeeService.getEmployees();
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
