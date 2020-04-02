import { Injectable } from '@angular/core';
import { CreateEmployeeComponent } from './create-employee.component';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {

  constructor() { }

  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.createEmployeeForm.dirty) {
        return confirm('Are you sure you want to discard your changes?');
    }

    return true;
}
}
