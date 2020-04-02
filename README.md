# AngularCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Github initial

step 1: delete .git --hidden
step 2: git init
step 3: git add -A
step 4: git commit -m "first commit in Angular"
step 5: git remote add orgin https://github.com/toan09sk/AngularLearning.git

## Setup project
ng new AngularCrud --skip-tests true
npm i bootstrap@3 --save
"./node_modules/bootstrap/dist/css/bootstrap.min.css",

## Reading data in angular
Create:
    models  --folder
    employee.model.ts

ng g c listEmployees --spec false --flat true

## Angular routing and navigation
ng g c createEmployee --spec false --flat true

## Angular base href
Local Developer Machine 
<base href="/">  -->  http://localhost:4200/list
                 -->  http://localhost:4200/create

Prodution Server
<base href="/emp/"> --> http://serverName/emp/list
                    --> http://serverName/emp/create

ng serve -o --base-href
ng build -prod --base-href

## Angular forms tutorial

There are 2 ways to create forms in Angular
1. Template Driven Forms 
2. Model Driven Forms (Commonly called Reactive Forms)

## Angular select options from array
 create department.model.ts in models folder

## Angular datepicker tutorial
1. Why is not a good practice to use the browser built-in DatePicker control
2. Installing ngx-bootstrap 
3. Using ngx-bootstrap datepicker in Angular

    npm i ngx-bootstrap --save
     "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css"

option
    bsDatepicker
    bsDaterangepicker

## Customise ngx bootstrap datepicker
theme-default
theme-green
theme-blue
theme-dark-blue
theme-red
theme-orange

## Angular ngif directive
assets/images/mark.png

## Angular custom validator example template driven forms
Create folder shared
Create a custom Directive 
ng g d shared/select-required-validator --spec false --flat true

## Angular password and confirm password validation
ng g d shared/confirm-equal-validator --spec false --flat true

## Angular 5 services tutorial
Create Employees Folder
ng g s employees/employee

## Pass data from parent to child component in angular
ng g c employees/DisplayEmployee --flat --no-spec