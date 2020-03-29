import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  gender = 'male';
  isActive = true;
  department = '3';

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm);
  }

}
