import {Component} from 'angular2/core';

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
  public whatsnext: string[] = [];
  public motion: string;

  constructor(){
    this.populate_nexts(this.motion);
  }

  public populate_nexts(last_motion: string){
    if(last_motion === 'MOF'){
      this.whatsnext.push('I have no idea');

    }
  }
}