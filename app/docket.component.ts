import {Component, OnInit} from 'angular2/core';
import {DocketEntry} from './case';

@Component({
    selector: 'my-docket',
    templateUrl: 'templates/docket.html',
    styleUrls: ['templates/docket.css', 'templates/cards.css'],
    inputs: ['docket_entry']
})

export class DocketComponent implements OnInit {
  public docket_entry: DocketEntry;
  public css: string;

  constructor() { }

  ngOnInit(){
    if(this.docket_entry.side === 'p'){
      this.css = 'col-sm-4';
    } else if(this.docket_entry.side === 'd'){
      this.css = 'col-sm-4 col-sm-offset-8';
    } else {
      this.css = 'col-sm-4 col-sm-offset-4'
    }
  }
}
