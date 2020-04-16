import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationCancel, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCrud';

    // the loading indicator
    showLoadingIndicator = true;

  // Inject the Angular Router
  constructor(private _router: Router) {
    // Subscribe to the router events observable
    this._router.events.subscribe(routerEvent => {

      // On NavigationStart, set showLoadingIndicator to ture
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      // On NavigationEnd or NavigationError or NavigationCancel
      // set showLoadingIndicator to false
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
      }

    });
}
}
