import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { MessagesService } from './messages-service';

@Component({
  selector: 'message',
  templateUrl: 'message.html'
})

export class Message {
  message: Object

  constructor(navParams: NavParams, messagesService: MessagesService) {
    this.message = messagesService.getMessage(navParams.data.id)
  }
}