import {Page} from 'ionic-angular';


export class Question {
  constructor(
    public text:string
  ) {
  }
}

@Page({
  templateUrl: 'build/pages/stuff/stuff.html',
})
export class StuffPage {
  private _loaded:boolean;
  private _question:Question;

  constructor() {

  }

  onPageWillEnter() {
    this._question = new Question("hello");
  }
}
