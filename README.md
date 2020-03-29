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

## Angular radio button checked by default


