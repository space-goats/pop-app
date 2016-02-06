import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-about',
    templateUrl: 'templates/about.html',
    styleUrls: ['templates/about.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AboutComponent { }
