import {Component} from 'angular2/core';
import {DocketEntry} from './case';

@Component({
    selector: 'my-docket',
    templateUrl: 'templates/docket.html',
    styleUrls: ['templates/docket.css',],
    inputs: ['docket_entry']
})

export class DocketComponent {
  public docket_entry: DocketEntry;
}
