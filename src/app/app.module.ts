import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { UHJMessages } from './app.component';

import { Messages } from '../messages/messages';
import { Message } from '../messages/message';

import { MessagesService } from '../messages/messages-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    UHJMessages,
    Message,
    Messages,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(UHJMessages)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    UHJMessages,
    Message,
    Messages,
  ],
  providers: [
    StatusBar,
    MessagesService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
