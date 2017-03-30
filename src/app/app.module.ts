import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactsPage } from '../pages/contacts/contacts';
import { TweetsPage } from '../pages/tweets/tweets';
import { Modals } from '../pages/modals/modals';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactsPage,
    TweetsPage,
    Modals
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactsPage,
    TweetsPage,
    Modals
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
