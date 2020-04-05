import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
  }
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId]);
  }

  onMouseMove() {

  }

}
