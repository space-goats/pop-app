import {Component} from 'angular2/core';
import {Party} from './case';

@Component({
    selector: 'my-party',
    templateUrl: 'templates/party.html',
    styleUrls: ['templates/party.css', 'templates/cards.css'],
    inputs: ['party']
})

export class PartyComponent {
  public party: Party;
}
