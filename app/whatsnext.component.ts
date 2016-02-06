import {Component} from 'angular2/core';
import {Entry, Link} from './entry';
import {ENTRIES} from './mock-entries';

@Component({
    selector: 'my-whatsnext',
    template: `
              <ul>
                <li *ngFor="#wn in whatsnext">
                  {{wn}}
                </li>
              </ul>
              `,
    inputs: ['motion']
})

export class WhatsNextComponent {
  public whatsnext: Entry[] = [];
  public motion: string;

  constructor(){
    this.populate_nexts(this.motion);
  }

  public populate_nexts(last_motion: string){
    if(last_motion === 'COMPLAINT/PETITION FILED $'){

      this.whatsnext.push(this.getEntry("SUMMONS ISSUED"), this.get);

    }else if last_motion === 'SUMMONS ISSUED'){

      this.whatsnext.push(this.getEntry("ANSWER FILED", "COUNTERCLAIM"), this.get);

    }else if last_motion === 'ANSWER FILED'){

      this.whatsnext.push(this.getEntry("COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"), this.get);

    }else if last_motion === 'COUNTERCLAIM'){

      this.whatsnext.push(this.getEntry("ANSWER FILED", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"), this.get);
    
    }else if last_motion === 'MOTION PROTECTIVE ORDER"'){
      
      this.whatsnext.push(this.getEntry("RESPONSE TO MOTION FILED",'COUNTERCLAIM', "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"), this.get);
    
    }else if last_motion === 'REQUEST FOR ADMISSIONS'){

      this.whatsnext.push(this.getEntry("RESPONSE TO REQ FOR ADMISSIONS","COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"), this.get);

    }else if last_motion === 'MOTION COMPEL'){

      this.whatsnext.push(this.getEntry("RESPONSE TO MOTION FILED","COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"), this.get);

    }else if last_motion === 'MOTION EXTEND SERVICE TIME'){

      this.whatsnext.push(this.getEntry("RESPONSE TO MOTION FILED","COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL",  "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"), this.get);

    }else if last_motion === 'PROPOSED ORDER TO DISMISS'){

      this.whatsnext.push(this.getEntry("RESPONSE TO MOTION FILED", "COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"), this.get);

    }else if last_motion === 'MOTION DEFAULT JUDGMENT'{

      this.whatsnext.push(this.getEntry("COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS",  "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"), this.get);

    }else if last_motion === 'MOTION CUSTODY/VISITATION'){

      this.whatsnext.push(this.getEntry("RESPONSE TO MOTION FILED","COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"), this.get);

    }else if last_motion === 'PROPOSED ORDER PATERNITY &amp; SUPPORT'){

      this.whatsnext.push(this.getEntry("COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED AGREED ORDER"), this.get);

    }
  }

  public getEntry(name:string):Entry{
    for e in ENTRIES
        if e.name = name
            return e;
  }
}
