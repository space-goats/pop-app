import {Component} from 'angular2/core';
import {CaseService} from './case.service';
import {CaseComponent} from './case.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.html',
    styleUrls: ['templates/app.css'],
    providers: [CaseService, HTTP_PROVIDERS, ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/case/:case_id', name: 'CaseDetails', component: CaseComponent}
])

export class AppComponent {
  public case_id: string = '60DR-15-524';
}
