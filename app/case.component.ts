import {Component, OnInit} from 'angular2/core';
import {Case, Party, DocketEntry} from './case';
import {PartyComponent} from './party.component';
import {DocketComponent} from './docket.component';
import {WhatsNextComponent} from './whatsnext.component';
import {CaseService} from './case.service';
import {Router, RouteParams} from 'angular2/router';


@Component({
    selector: 'my-case',
    templateUrl: 'templates/case.html',
    styleUrls: ['templates/case.css',],
    directives: [PartyComponent, DocketComponent, WhatsNextComponent]
})

export class CaseComponent implements OnInit {
  public case_id: string;
  public case: Case;
  public error: string;
  public last_entry: string;

  constructor(private _caseService: CaseService,
              private _routeParams: RouteParams){ }

  ngOnInit(){
    this.case_id = this._routeParams.get('case_id');
    this._caseService.getMockCase(this.case_id)
        .then(res => this._setup(res),
              error => this.error = "SERVER ERROR\n" + error);
    }

  private _setup(res: Case){
    this.case = res;
    if(this.case && this.case.docket.length > 0){
      this.last_entry = this.case.docket[this.case.docket.length - 1].name;
    }
  }
}
