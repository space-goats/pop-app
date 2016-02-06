export interface Case {
  case_id: string;
  title: string;
  case_type: string;
  status?: string;
  last_date: string;
  parties?: Party[];
  docket?: DocketEntry[];
}

export interface Party {
  name: string;
  party_type: string;
  side: string;
}

export interface DocketEntry {
  side: string;
  date: string;
  name: string;
  file?: string;
}
