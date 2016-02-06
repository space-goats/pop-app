import {Injectable} from 'angular2/core';
import {CASE} from './mock-case';

@Injectable()
export class CaseService {
  public getCase(case_id: string){
    return Promise.resolve(CASE);
  }
}
