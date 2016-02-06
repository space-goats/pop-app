import {Case} from './case';

export var CASE: Case = {
  'case_id': '60DR-15-2415',
  'title': 'Geller v Green',
  'case_type': 'Divorce',
  'status': 'Open',
  'last_date': '2015-02-24',
  'parties': [
    {'name': 'Ross Geller', 'party_type': 'Plaintiff', 'side': 'p'},
    {'name': 'Joey Tribbiani', 'party_type': 'Attorney', 'side': 'p'},
    {'name': 'Rachel Green', 'party_type': 'Defendant', 'side': 'd'},
    {'name': 'Monica Geller', 'party_type': 'Attorney', 'side': 'd'},
    {'name': 'Chandler Bing', 'party_type': 'Judge', 'side': 'j'},
  ],
  'docket': [
    {'side': 'p', 'date': '2015-10-24', 'name': 'Manner of Filing'},
    {'side': 'o', 'date': '2015-10-24', 'name': 'SOMETHING ELSE'},
    {'side': 'd', 'date': '2015-10-23', 'name': 'COMPLAINT/PETITION FILED $', 'file': 'http://google.com/'},
    {'side': 'p', 'date': '2015-10-23', 'name': 'MOTION DEFAULT JUDGMENT', 'file': 'http://google.com/'},
    {'side': 'd', 'date': '2015-10-23', 'name': 'SUMMONS ISSUED', 'file': 'http://google.com/'}
  ]
};
