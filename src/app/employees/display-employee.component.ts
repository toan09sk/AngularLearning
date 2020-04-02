import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {

  @Input() employee: Employee;
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;
  
    console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL') );
    console.log('Current : ' + currentEmployee.name);
  }
  

}
