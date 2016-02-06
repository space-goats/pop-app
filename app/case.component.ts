import {Component, OnInit} from 'angular2/core';
import {Case, Party, DocketEntry} from './case';
import {PartyComponent} from './party.component';
import {DocketComponent} from './docket.component';
import {CaseService} from './case.service';
import {Router, RouteParams} from 'angular2/router';


@Component({
    selector: 'my-case',
    templateUrl: 'templates/case.html',
    styleUrls: ['templates/case.css',],
    directives: [PartyComponent, DocketComponent]
})

export class CaseComponent implements OnInit {
  public case_id: string;
  public case: Case;
  public error: string;

  constructor(private _caseService: CaseService,
              private _routeParams: RouteParams){ }

  ngOnInit(){
    this.case_id = this._routeParams.get('case_id');
    this._caseService.getMockCase(this.case_id)
        .then(res => this.case = res,
              error => this.error = "SERVER ERROR\n" + error);
  }
}
