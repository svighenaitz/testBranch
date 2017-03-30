import { Component, ViewChild } from '@angular/core';

import { NavController, Slides, ModalController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactsPage } from '../contacts/contacts';
import { TweetsPage } from '../tweets/tweets';
import { Modals } from '../modals/modals';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public params: any;
  public pages: Array<{ title: string, link: any, description: string, avatar: string }>;
  public paginaAbout: AboutPage;
  public technologies: Array<{ name: string, date: string, summary: string, website: any }>;

  @ViewChild('picSlider') viewer: Slides;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.params = { id: 1, name: "Sample APP", description: "This is a sample app CIAO" };
    this.pages = [{ title: 'About', link: AboutPage, description: 'Who we are. What we do. Why we&rsquo;re here', avatar: 'assets/images/about.png' },
    { title: 'Contacts', link: ContactsPage, description: 'Who we are. What we do. Why we&rsquo;re here', avatar: 'assets/images/contacts.png' },
    { title: 'Tweets', link: TweetsPage, description: 'Who we are. What we do. Why we&rsquo;re here', avatar: 'assets/images/tweets.png' }];
    this.technologies = [{ name: "Angular JS", date: "October 20th 2010", summary: "Web application framework developed and maintained by Google", website: "http://www.angular.org" }, { name: "Apache Cordova", date: "2009", summary: "Develop mobile apps with HTML, CSS &amp; JS and publish to multiple platforms from one single codebase", website: "https://cordova.apache.org" }, { name: "TypeScript", date: "October 1st 2012", summary: "Strict superset of JavaScript developed and maintained by Microsoft", website: "http://typescriptlang.org" }];

  }

  slideOpts = {
    pager: true,
    speed: 750
  };

  onSlideMoved() {
    let currIndex = this.viewer.getActiveIndex(),
      numSlides = this.viewer.length(),
      firstSlide = this.viewer.isBeginning(),
      lastSlide = this.viewer.isEnd();
    console.log(`Current index is, ${currIndex}`);
    if (firstSlide) {
      console.log(`This is the FIRST slide of ${numSlides} slides`);
    } else if (lastSlide) {
      console.log(`This is the LAST slide of ${numSlides} slides`);
    }
  }

  setNavigationLink(page) {
    //let opts = {animate:true, animation: "ios-transition" , duration : 2500, direction : "back" }
    this.navCtrl.push(page);
  }

  activateModal(link) {
    let modal = this.modalCtrl.create(Modals, link );
    modal.present();
  }


}
