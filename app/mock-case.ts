import {Case} from './case';

export var CASE: Case = {
  'case_id': '60DR-15-2415',
  'title': 'Gheller v Green',
  'case_type': 'Divorce',
  'status': 'Open',
  'last_date': '2015-02-24',
  'parties': [
    {'name': 'Ross Gheller', 'party_type': 'Plaintiff', 'side': 'p'},
    {'name': 'Rachael Green', 'party_type': 'Defendant', 'side': 'd'}
  ],
  'docket': [
    {'side': 'p', 'date': '2015-10-24', 'name': 'Manner of Filing'},
    {'side': 'd', 'date': '2015-10-23', 'name': 'COMPLAINT/PETITION FILED $', 'file': 'http://google.com/'}
  ]
};
