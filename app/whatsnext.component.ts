import {Component} from 'angular2/core';
import {Entry, Link} from './entry';
import {ENTRIES} from './mock-entries';

@Component({
    selector: 'my-whatsnext',
    template: `
              <ul>
                <li *ngFor="#wn in whatsnext">
                  <p>{{wn.name}}</p>
                  <p>{{wn.description}}</p>
                  <p>{{wn.help}}</p>
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

      this.whatsnext = this.getEntry(["SUMMONS ISSUED"]);

    }else if(last_motion === 'SUMMONS ISSUED'){

      this.whatsnext = this.getEntry(["ANSWER FILED", "COUNTERCLAIM"]);

    }else if(last_motion === 'ANSWER FILED'){

      this.whatsnext = this.getEntry(["COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"]);

    }else if(last_motion === 'COUNTERCLAIM'){

      this.whatsnext = this.getEntry(["ANSWER FILED", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"]);

    }else if(last_motion === 'MOTION PROTECTIVE ORDER"'){

      this.whatsnext = this.getEntry(["RESPONSE TO MOTION FILED",'COUNTERCLAIM', "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"]);

    }else if(last_motion === 'REQUEST FOR ADMISSIONS'){

      this.whatsnext = this.getEntry(["RESPONSE TO REQ FOR ADMISSIONS","COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"]);

    }else if(last_motion === 'MOTION COMPEL'){

      this.whatsnext = this.getEntry(["RESPONSE TO MOTION FILED","COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"]);

    }else if(last_motion === 'MOTION EXTEND SERVICE TIME'){

      this.whatsnext = this.getEntry(["RESPONSE TO MOTION FILED","COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL",  "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"]);

    }else if(last_motion === 'PROPOSED ORDER TO DISMISS'){

      this.whatsnext = this.getEntry(["RESPONSE TO MOTION FILED", "COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"]);

    }else if(last_motion === 'MOTION DEFAULT JUDGMENT'){

      this.whatsnext = this.getEntry(["COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS",  "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"]);

    }else if(last_motion === 'MOTION CUSTODY/VISITATION'){

      this.whatsnext = this.getEntry(["RESPONSE TO MOTION FILED","COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED ORDER PATERNITY &amp; SUPPORT" , "PROPOSED AGREED ORDER"]);

    }else if(last_motion === 'PROPOSED ORDER PATERNITY &amp; SUPPORT'){

      this.whatsnext = this.getEntry(["COUNTERCLAIM", "MOTION PROTECTIVE ORDER", "REQUEST FOR ADMISSIONS", "MOTION COMPEL", "MOTION EXTEND SERVICE TIME", "PROPOSED ORDER TO DISMISS", "MOTION DEFAULT JUDGMENT", "MOTION CUSTODY/VISITATION", "PROPOSED AGREED ORDER"]);

    }
  }

  public getEntry(names:string[]):Entry[]{
    var ret: Entry[] = [];
    for(let i: number = 0; i < ENTRIES.length; i++){
      for(let ii: number = 0; i < names.length; ii++){
        if(ENTRIES[i].name === names[ii]){
          ret.push(ENTRIES[i]);
        }
      }
    }
    return ret;
  }
}
