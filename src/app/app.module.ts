import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { UHJMessages } from './app.component';

import { HomePage } from '../pages/home/home';
import { Message } from '../messages/message';

import { MessagesService } from '../messages/messages.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    UHJMessages,
    Message,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(UHJMessages)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    UHJMessages,
    Message,
    HomePage,
  ],
  providers: [
    StatusBar,
    MessagesService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
