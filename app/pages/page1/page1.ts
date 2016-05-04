import {NavController, Page} from 'ionic-angular';
import {StuffPage} from '../stuff/stuff';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor(private nav: NavController) {

  }

  goToStuff() {
    this.nav.push(StuffPage);
  }
}
