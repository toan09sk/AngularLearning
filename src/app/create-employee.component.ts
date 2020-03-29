import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2020, 11, 30),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm);
  }

}
