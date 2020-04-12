import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolverService implements Resolve<Employee[]> {

  constructor(private _employeeService: EmployeeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    return this._employeeService.getEmployees();
  }
}
