import {Injectable} from 'angular2/core';
import {CASE} from './mock-case';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Case} from './case';

@Injectable()
export class CaseService {
  constructor(private _http: Http){ }

  public getMockCase(case_id: string){
    return Promise.resolve(CASE);
  }

  public getCase(case_id: string){
    return this._http.get('/api/case/' + case_id + '/')
                  .map(res => <Case> res.json())
                  .catch(this.handleError);
  }

  private handleError(error: any){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
