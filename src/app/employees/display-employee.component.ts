import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  
  constructor() { }

  ngOnInit() {
  }

  getNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }

}
